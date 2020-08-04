const express = require("express");
const router = express.Router();

const Book = require("../../models/Book");
const bodyParser = require("body-parser");

// @route GET api/books
// @desc get all books
// @access public
router.get("/", (req, res) => {
  Book.find()
    .sort({ date: -1 })
    .then((books) => res.json(books));
});

// @route POST api/books
// @desc create books
// @access public
router.post("/", (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    published: req.body.published,
    genre: req.body.genre,
  });
  newBook.save().then((book) => res.json(book));
});

// @route DELETE api/books
// @desc delete a book
// @access public
router.delete("/:id", (req, res) => {
  Book.findById(req.params.id)
    .then((book) => book.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
});

module.exports = router;
