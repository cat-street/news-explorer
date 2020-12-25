const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized');
const { authErrors } = require('../constants/error-messages');

const { NODE_ENV, JWT_SECRET } = process.env;
const { JWT_DEV_SECRET } = require('../config');

const authorize = (req, _res, next) => {
  const token = req.cookies.jwt;
  if (!token) throw new UnauthorizedError(authErrors.unauthorized.NOTOKEN_MESSAGE);

  let payload;

  try {
    payload = jwt.verify(
      token,
      NODE_ENV === 'production' ? JWT_SECRET : JWT_DEV_SECRET,
    );
  } catch (err) {
    throw new UnauthorizedError(authErrors.unauthorized.NOTOKEN_MESSAGE);
  }

  req.user = payload;

  next();
};

module.exports = { authorize };
