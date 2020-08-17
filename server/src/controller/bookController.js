const express = require("express");
const bookController = express.Router();
const Book = require("../models/book.model");

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
    let book = await Book.create(req.body);
    res.json({
      success: true,
      book,
    });
  } catch (e) {
    res
      .staus(500)
      .send({ 
        success: false,
        error: "Cannot add book sth wrong!: " + e 
      });
  }
});

bookController.post("/search", async (req, res) => {});

module.exports = bookController;
