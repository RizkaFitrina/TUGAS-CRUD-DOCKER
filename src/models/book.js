class Book {
  static books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: '1984', author: 'George Orwell', year: 1949 }
  ];

  static findAll() {
    return this.books;
  }

  static findById(id) {
    return this.books.find(book => book.id === parseInt(id));
  }

  static create(data) {
    const newBook = {
      id: this.books.length > 0 ? Math.max(...this.books.map(b => b.id)) + 1 : 1,
      title: data.title,
      author: data.author,
      year: parseInt(data.year)
    };
    this.books.push(newBook);
    return newBook;
  }

  static update(id, data) {
    const index = this.books.findIndex(book => book.id === parseInt(id));
    if (index === -1) return null;

    this.books[index] = {
      ...this.books[index],
      title: data.title || this.books[index].title,
      author: data.author || this.books[index].author,
      year: data.year ? parseInt(data.year) : this.books[index].year
    };

    return this.books[index];
  }

  static delete(id) {
    const index = this.books.findIndex(book => book.id === parseInt(id));
    if (index === -1) return null;

    const deleted = this.books[index];
    this.books.splice(index, 1);
    return deleted;
  }
}

module.exports = Book;