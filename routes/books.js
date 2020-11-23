const router = require('express').Router()
const Book = require('../models/Books')

router.get('/books', async (req, res) => {
    
    try {


    } catch (error) {
        res.sendStatus(500).send(error)
    }


})

router.post('/books', async (req, res) => {

        const bookCheck = await Book.find({bookid: req.body.id})
        
        if (!bookCheck.length <= 0) {
            console.log('already added..')
        } else {

                const addedBook = new Book({
                bookid: req.body.id,
                authors: req.body.authors[0],
                description: req.body.description,
                image: req.body.imageLinks,
                link: req.body.infoLink,
                title: req.body.title
            })

            addedBook.save()
            .then((response) => res.sendStatus(200).send(response))
            .then(error => res.sendStatus(500).send(error))
        }
})

router.delete('/books/:id', async (req, res) => {
    console.log(req)
    try {


    } catch (error) {
        res.sendStatus(500).send(error)
    }


})

module.exports = router