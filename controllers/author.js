const models = require('../models')

const getArticleByAuthorId = (req, res) => {
  models.Author.findByPk(req.params.id, {
    include: [{ model: models.Article }]
  })
    .then((author) => {
      console.log(author);

      if (!author) {
        return res.status(404).json({ message: 'Author not found' });
      }

      return res.status(200).json({ author });
    })
    .catch((error) => {
      return res.status(500).send(error.message);
    });
};

module.exports = { getArticleByAuthorId }
