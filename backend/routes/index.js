const router = require('express').Router();
const articleRouter = require('./articles');
const userRouter = require('./users');

const NotFoundError = require('../errors/not-found');
const { requestErrors } = require('../constants/error-messages');

const { authorize } = require('../middleware/auth');
const { validateUser, validateLogin } = require('../middleware/validation');
const { createUser, login, logout } = require('../controllers/users');

router.post('/signup', validateUser, createUser);
router.post('/signin', validateLogin, login);
router.get('/signout', logout);

router.use('/articles', authorize, articleRouter);
router.use('/users', authorize, userRouter);

router.all('*', () => {
  throw new NotFoundError(requestErrors.notFound.URL_MESSAGE);
});

module.exports = router;
