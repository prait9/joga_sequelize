const { Sequelize } = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../../models')

const createArticle = (req, res) => {
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.create({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    }).then(article => {
        console.log(article)
        return res.status(200).json({message: 'Article added'})
    }).catch(error => {
        return res.status(500).send(error.message)
    })
}

const updateArticle = (req, res) => {
    const articleId = req.params.id

    if (req.method === 'GET') {

        const articlePromise = models.Article.findOne({
            where: { id: articleId }
        })

        const authorsPromise = models.Author.findAll()

        Promise.all([articlePromise, authorsPromise])
            .then(([article, authors]) => {
                if (!article) {
                    return res.status(404).json({ message: 'Article not found' })
                }

                console.log('Article:', article)
                console.log('Authors:', authors)

                return res.status(200).json({
                    article: article,
                    authors: authors
                })
            })
            .catch(error => {
                return res.status(500).send(error.message)
            })

    } else if (req.method === 'POST') {
        let name      = req.body.name
        let slug      = req.body.slug
        let image     = req.body.image
        let body      = req.body.body
        let author_id = req.body.author_id

        models.Article.update(
            {
                name:      name,
                slug:      slug,
                image:     image,
                body:      body,
                author_id: author_id
            },
            {
                where: { id: articleId }
            }
        )
            .then(([affectedRows]) => {
                console.log(`Updated ${affectedRows} row(s)`)

                if (affectedRows === 0) {
                    return res.status(404).json({ message: 'Article not found or no changes made' })
                }

                return res.status(200).json({ message: 'Article updated successfully' })
            })
            .catch(error => {
                return res.status(500).send(error.message)
            })
    }
}

const deleteArticle = (req, res) => {
    const articleId = req.params.id
    models.Article.destroy({
        where: { id: articleId }
    })
        .then(affectedRows => {
            console.log(`Deleted ${affectedRows} row(s)`)

            if (affectedRows === 0) {
                return res.status(404).json({ message: 'Article not found' })
            }

            return res.status(200).json({ message: 'Article deleted successfully' })
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })
}





module.exports = {
    createArticle,
    updateArticle,
    deleteArticle
}