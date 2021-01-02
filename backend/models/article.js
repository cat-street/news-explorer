const mongoose = require('mongoose');
const { urlValidator } = require('../utils/validator');
const { keywords, validationErrors } = require('../constants/error-messages');

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: [true, validationErrors.requiredField(keywords.KEYWORD)],
  },
  title: {
    type: String,
    required: [true, validationErrors.requiredField(keywords.TITLE)],
  },
  text: {
    type: String,
    required: [true, validationErrors.requiredField(keywords.TEXT)],
  },
  date: {
    type: String,
    required: [true, validationErrors.requiredField(keywords.DATE)],
  },
  source: {
    type: String,
    required: [true, validationErrors.requiredField(keywords.SOURCE)],
  },
  link: {
    type: String,
    required: [true, validationErrors.requiredField(keywords.LINK)],
    validate: {
      validator: urlValidator,
      message: validationErrors.url.INVALID,
    },
  },
  image: {
    type: String,
    required: false,
    validate: {
      validator: (value) => {
        if (value === '') {
          return true;
        }
        return urlValidator(value);
      },
      message: validationErrors.url.INVALID,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: [true, validationErrors.requiredField(keywords.OWNER)],
  },
});

/**
 * @method toJSON
 * @description удалить _id из объекта ответа
 */
articleSchema.methods.toJSON = function toJSON() {
  const obj = this.toObject();
  delete obj.owner;
  return obj;
};

module.exports = mongoose.model('article', articleSchema);
