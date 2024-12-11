const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// Show all books
router.get('/', (req, res) => {
  try {
    const books = Book.findAll();
    res.render('books/index', { 
      title: 'Daftar Buku', 
      books: books
    });
  } catch (error) {
    res.status(500).render('error', {
      title: 'Error',
      message: 'Terjadi kesalahan saat mengambil data buku'
    });
  }
});

// Show add book form
router.get('/add', (req, res) => {
  res.render('books/add', { 
    title: 'Tambah Buku'
  });
});

// Add new book
router.post('/', (req, res) => {
  try {
    Book.create(req.body);
    res.redirect('/books');
  } catch (error) {
    res.status(500).render('error', {
      title: 'Error',
      message: 'Terjadi kesalahan saat menambahkan buku'
    });
  }
});

// Show edit form
router.get('/:id/edit', (req, res) => {
  try {
    const book = Book.findById(req.params.id);
    if (!book) {
      return res.status(404).render('error', {
        title: 'Error',
        message: 'Buku tidak ditemukan'
      });
    }
    res.render('books/edit', {
      title: 'Edit Buku',
      book: book
    });
  } catch (error) {
    res.status(500).render('error', {
      title: 'Error',
      message: 'Terjadi kesalahan saat mengambil data buku'
    });
  }
});

// Update book
router.put('/:id', (req, res) => {
  try {
    Book.update(req.params.id, req.body);
    res.redirect('/books');
  } catch (error) {
    res.status(500).render('error', {
      title: 'Error',
      message: 'Terjadi kesalahan saat memperbarui buku'
    });
  }
});

// Delete book
router.delete('/:id', (req, res) => {
  try {
    Book.delete(req.params.id);
    res.redirect('/books');
  } catch (error) {
    res.status(500).render('error', {
      title: 'Error',
      message: 'Terjadi kesalahan saat menghapus buku'
    });
  }
});

module.exports = router;