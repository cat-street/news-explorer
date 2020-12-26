const Article = require('../models/article');
const BadRequestError = require('../errors/bad-request');
const ForbiddenError = require('../errors/forbidden');
const NotFoundError = require('../errors/not-found');
const { requestErrors } = require('../constants/error-messages');

const getArticles = async (req, res, next) => {
  try {
    const articles = await Article.find({ owner: req.user._id })
      .sort({ createdAt: -1 });
    res.send(articles);
  } catch (err) {
    next(err);
  }
};

const createArticle = async (req, res, next) => {
  const { keyword, title, text, date, source, link, image } = req.body;
  const owner = req.user._id;

  try {
    const article = await Article.create({
      keyword,
      title,
      text,
      date,
      source,
      link,
      image,
      owner,
    });
    res.send(article);
  } catch (err) {
    if (err.name === requestErrors.validation.ERROR_NAME) {
      const error = new BadRequestError(err.message.replace(/^.+: /g, ''));
      next(error);
    }
    next(err);
  }
};

const deleteArticle = async (req, res, next) => {
  const { articleId } = req.params;
  try {
    const article = await Article.findById(articleId).orFail(() => {
      throw new NotFoundError(requestErrors.notFound.CARD_MESSAGE);
    });
    /** @description Запретить удалять чужие статьи */
    if (article.owner.toString() !== req.user._id.toString()) {
      throw new ForbiddenError(requestErrors.forbidden.CARD_MESSAGE);
    }
    const deletedArticle = await article.remove();
    res.send(deletedArticle);
  } catch (err) {
    if (err.kind === 'ObjectId') {
      const error = new BadRequestError(requestErrors.invalid.CARD_MESSAGE);
      next(error);
    }
    next(err);
  }
};

module.exports = { getArticles, createArticle, deleteArticle };
