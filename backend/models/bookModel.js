const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema({
    image: {type: String},
    title: {type: String, required: true, trim: true, minlength: 1, unique: false},
    isbn: {type: String, required: true},
    author: [String],
    category: {type: String},
    classification: {type: String},
    format: {type: String, required: false},
    pages: {type: Number, required: false, minlength: 1},
    binding: {type: String},
    publisher: {type: String},
    publishedYear: {type: Date},
    checkedOut: {type: Boolean},
    callNumber: {type: String},
    summary: {type: String},
    holds: [String],
    type: {type: String},

}, {
    timestamps: true
}, {
    collection: 'books'
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;