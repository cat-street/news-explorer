const keywords = {
  EMAIL: 'email',
  PASSWORD: 'пароль',
  NAME: 'имя',
  KEYWORD: 'keyword',
  TITLE: 'title',
  TEXT: 'text',
  DATE: 'date',
  SOURCE: 'source',
  LINK: 'link',
  IMAGE: 'image',
  OWNER: 'owner',
};

const validationErrors = {
  email: {
    INVALID: 'Недопустимый E-mail',
  },
  password: {
    SHORT: 'Минимальная длина пароля - 6 символов',
  },
  name: {
    SHORT: 'Минимальная длина имени - 2 символа',
    LONG: 'Имя не должно превышать 30 символов',
  },
  url: {
    INVALID: 'Недопустимый URL',
  },
  id: {
    INVALID: 'Невалидный ID',
  },
  date: {
    INVALID: 'Неверный формат даты',
  },
  requiredField: (name) => `Поле '${name}' обязательно`,
  emptyField: (name) => `Поле '${name}' не может быть пустым`,
};

const requestErrors = {
  notFound: {
    ERROR_NAME: 'DocumentNotFoundError',
    USER_MESSAGE: 'Пользователь не найден',
    URL_MESSAGE: 'Запрашиваемый ресурс не найден',
    CARD_MESSAGE: 'Статья не найдена',
  },
  validation: {
    ERROR_NAME: 'ValidationError',
  },
  conflict: {
    MONGO_ERROR_CODE: 11000,
    MESSAGE: 'Пользователь с данным e-mail уже зарегистрирован',
  },
  forbidden: {
    CARD_MESSAGE: 'Нельзя удалять чужие статьи',
  },
  invalid: {
    USER_MESSAGE: 'Невалидный id пользователя',
    CARD_MESSAGE: 'Невалидный id статьи',
  },
  serverError: {
    MESSAGE: 'Внутренняя ошибка сервера',
  },
};

const authErrors = {
  unauthorized: {
    LOGIN_MESSAGE: 'Неправильные e-mail или пароль',
    NOTOKEN_MESSAGE: 'Необходима авторизация',
  },
};

module.exports = {
  keywords, validationErrors, requestErrors, authErrors,
};
