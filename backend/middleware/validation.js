const { celebrate, Joi } = require('celebrate');
const { urlValidator, emailValidator } = require('../utils/validator');
const { keywords, validationErrors } = require('../constants/error-messages');

const validatePost = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().trim().required()
      .messages({
        'any.required': validationErrors.requiredField(keywords.KEYWORD),
        'string.empty': validationErrors.emptyField(keywords.KEYWORD),
      }),
    title: Joi.string().trim().required()
      .messages({
        'any.required': validationErrors.requiredField(keywords.TITLE),
        'string.empty': validationErrors.emptyField(keywords.TITLE),
      }),
    text: Joi.string().trim().required()
      .messages({
        'any.required': validationErrors.requiredField(keywords.TEXT),
        'string.empty': validationErrors.emptyField(keywords.TEXT),
      }),
    date: Joi.date().required()
      .messages({
        'any.required': validationErrors.requiredField(keywords.DATE),
        'date.base': validationErrors.date.INVALID,
      }),
    source: Joi.string().trim().required()
      .messages({
        'any.required': validationErrors.requiredField(keywords.SOURCE),
        'string.empty': validationErrors.emptyField(keywords.SOURCE),
      }),
    link: Joi.string().trim().required()
      .custom((value, helpers) => {
        if (urlValidator(value)) {
          return value;
        }
        return helpers.message(validationErrors.url.INVALID);
      })
      .messages({
        'any.required': validationErrors.requiredField(keywords.LINK),
        'string.empty': validationErrors.emptyField(keywords.LINK),
      }),
    image: Joi.string().trim().required()
      .custom((value, helpers) => {
        if (urlValidator(value)) {
          return value;
        }
        return helpers.message(validationErrors.url.INVALID);
      })
      .messages({
        'any.required': validationErrors.requiredField(keywords.IMAGE),
        'string.empty': validationErrors.emptyField(keywords.IMAGE),
      }),
  }),
});

const validateObjectId = celebrate({
  params: Joi.object().keys({
    articleId: Joi.string().alphanum().length(24)
      .messages({
        'string.alphanum': validationErrors.id.INVALID,
        'string.length': validationErrors.id.INVALID,
      }),
  }),
});

const validateUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string().trim().required()
      .custom((value, helpers) => {
        if (emailValidator(value)) {
          return value;
        }
        return helpers.message(validationErrors.email.INVALID);
      })
      .messages({
        'any.required': validationErrors.requiredField(keywords.EMAIL),
        'string.empty': validationErrors.emptyField(keywords.EMAIL),
      }),
    password: Joi.string().trim().min(6).required()
      .messages({
        'any.required': validationErrors.requiredField(keywords.PASSWORD),
        'string.empty': validationErrors.emptyField(keywords.PASSWORD),
        'string.min': validationErrors.password.SHORT,
      }),
    name: Joi.string().trim().min(2).max(30)
      .required()
      .messages({
        'any.required': validationErrors.requiredField(keywords.NAME),
        'string.empty': validationErrors.emptyField(keywords.NAME),
        'string.min': validationErrors.name.SHORT,
        'string.max': validationErrors.name.LONG,
      }),
  }),
});

const validateLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().trim().required()
      .custom((value, helpers) => {
        if (emailValidator(value)) {
          return value;
        }
        return helpers.message(validationErrors.email.INVALID);
      })
      .messages({
        'any.required': validationErrors.requiredField(keywords.EMAIL),
        'string.empty': validationErrors.emptyField(keywords.EMAIL),
      }),
    password: Joi.string().trim().required()
      .messages({
        'any.required': validationErrors.requiredField(keywords.PASSWORD),
        'string.empty': validationErrors.emptyField(keywords.PASSWORD),
      }),
  }),
});

module.exports = {
  validatePost, validateObjectId, validateUser, validateLogin,
};
