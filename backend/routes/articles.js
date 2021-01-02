const router = require('express').Router();
const { validatePost, validateObjectId } = require('../middleware/validation');
const {
  getArticles,
  createArticle,
  deleteArticle,
} = require('../controllers/articles');

router.get('/', getArticles);
router.post('/', validatePost, createArticle);
router.delete('/:articleId', validateObjectId, deleteArticle);

module.exports = router;
