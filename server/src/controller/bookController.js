const express = require('express');
const bookController = express.Router();
const Book = require('../models/book.model');

/* Get all Posts */
bookController.get('/', (req, res, next) => {
    Book.find({} , function(err, result){
        if(err){
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
});


module.exports = bookController;