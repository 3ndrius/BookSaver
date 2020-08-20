const express = require("express");
const bookController = express.Router();
const Book = require("../models/book.model");
const axios = require("axios");

/* Get all saved books */
bookController.get("/", async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json({ success: true, books });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: "Cannot get books form server!: " + e,
    });
  }
});

bookController.post("/", async (req, res) => {
  try {
    let book = await Book.create(req.body.book);
    res.status(201).json({
      success: true,
      book,
    });
    console.log(book)
  } catch (e) {
    res.staus(500).send({
      success: false,
      error: "Cannot add book sth wrong!: " + e,
    });
  }
});

bookController.post("/search", async (req, res) => {
  try {
    let search = req.body.search.replace(/\s/g, "+");
    let bookData = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search}`
    );

    res.status(200).json(bookData.data.items);
  } catch (e) {
    res.status(500).json({
      success: false,
      error: "Cannot find data from ext server: " + e,
    });
  }
});

bookController.delete("/:id", async (req, res) => {
  try {
    let book = await Book.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      book,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: "Cannot delete data from server: " + e,
    });
  }
});

module.exports = bookController;
