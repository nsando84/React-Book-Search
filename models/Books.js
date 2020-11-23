const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookid : {
        type: String,
    },
    authors: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    link: {
        type: String,
    },
    title: {
        type: String
    }

})


module.exports = Book = mongoose.model('books', bookSchema)