const Sequelize = require('sequelize')
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../models')

const getArticleByAuthorId = (req, res) => {
  models.Article.findAll({
    where: { author_id: req.params.id },
    include: [{model: models.Author}],
})
    .then((articles) => {
      console.log(articles);
      res.status(200).json({ articles });
    })
    .catch((error) => {
      res.status(500).send(error.message);
    });
};

module.exports = { getArticleByAuthorId }