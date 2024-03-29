// Post.model.js
const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema({
   title: {
       type: String
   },
   description: {
       type: String
   },
   authors: {
       type: [ String ]
   },
   imageLinks: {
       type: { String }
   },
   infoLink: {
       type: String
   }
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
