const Book = require('../models/book');

exports.getAllBooks = (req, res) => {
  try {
    const books = Book.findAll();
    res.render('books/index', { 
      title: 'Daftar Buku',
      books,
      messages: req.flash('info')
    });
  } catch (error) {
    console.error('Error in getAllBooks:', error);
    req.flash('error', 'Terjadi kesalahan saat mengambil data buku');
    res.status(500).render('error', { 
      title: 'Error', 
      message: 'Terjadi kesalahan saat mengambil data buku'
    });
  }
};

exports.getAddBookForm = (req, res) => {
  res.render('books/add', { 
    title: 'Tambah Buku Baru',
    messages: req.flash('error')
  });
};

exports.createBook = (req, res) => {
  try {
    const book = Book.create(req.body);
    req.flash('info', 'Buku berhasil ditambahkan');
    res.redirect('/books');
  } catch (error) {
    console.error('Error in createBook:', error);
    req.flash('error', error.message);
    res.redirect('/books/add');
  }
};

exports.getEditBookForm = (req, res) => {
  try {
    const book = Book.findById(req.params.id);
    if (!book) {
      req.flash('error', 'Buku tidak ditemukan');
      return res.redirect('/books');
    }
    res.render('books/edit', { 
      title: 'Edit Buku',
      book,
      messages: req.flash('error')
    });
  } catch (error) {
    console.error('Error in getEditBookForm:', error);
    req.flash('error', 'Terjadi kesalahan saat mengambil data buku');
    res.redirect('/books');
  }
};

exports.updateBook = (req, res) => {
  try {
    const book = Book.update(req.params.id, req.body);
    req.flash('info', 'Buku berhasil diperbarui');
    res.redirect('/books');
  } catch (error) {
    console.error('Error in updateBook:', error);
    req.flash('error', error.message);
    res.redirect(`/books/${req.params.id}/edit`);
  }
};

exports.deleteBook = (req, res) => {
  try {
    Book.delete(req.params.id);
    req.flash('info', 'Buku berhasil dihapus');
    res.redirect('/books');
  } catch (error) {
    console.error('Error in deleteBook:', error);
    req.flash('error', 'Terjadi kesalahan saat menghapus buku');
    res.redirect('/books');
  }
};