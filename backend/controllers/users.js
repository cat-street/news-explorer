const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const NotFoundError = require('../errors/not-found');
const ConflictError = require('../errors/conflict');
const BadRequestError = require('../errors/bad-request');
const { requestErrors } = require('../constants/error-messages');

const { NODE_ENV, JWT_SECRET } = process.env;
const { JWT_DEV_SECRET } = require('../config');

const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id)
      .orFail(() => {
        throw new NotFoundError(requestErrors.notFound.USER_MESSAGE);
      });
    res.send(user);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      const error = new BadRequestError(requestErrors.invalid.USER_MESSAGE);
      next(error);
    }
    next(err);
  }
};

const createUser = async (req, res, next) => {
  const {
    email,
    password,
    name,
  } = req.body;
  try {
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({
      email,
      password: hash,
      name,
    });
    res.send(user);
  } catch (err) {
    if (err.name === requestErrors.validation.ERROR_NAME) {
      const error = new BadRequestError(err.message.replace(/^.+: /g, ''));
      next(error);
    }
    /** @description ошибка MongoDB, дублирующаяся запись */
    if (err.code === requestErrors.conflict.MONGO_ERROR_CODE) {
      const error = new ConflictError(requestErrors.conflict.MESSAGE);
      next(error);
    }
    next(err);
  }
};

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await User.findUser(email, password);
    const token = jwt.sign(
      { _id: user._id },
      NODE_ENV === 'production' ? JWT_SECRET : JWT_DEV_SECRET,
      { expiresIn: '7d' },
    );
    res
      .cookie('jwt', token, {
        maxAge: 604800000,
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      })
      .send(user);
  } catch (err) {
    next(err);
  }
};

const logout = async (_req, res, next) => {
  try {
    res
      .cookie('jwt', '', {
        maxAge: -1,
        httpOnly: true,
        secure: true,
        sameSite: 'none',
      })
      .send({ message: 'Logged out' });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getMe,
  createUser,
  login,
  logout,
};
