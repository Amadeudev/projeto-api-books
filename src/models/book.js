export class Book {
    constructor(id, title, author, category) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.category = category;
    }

    static getRecommendedBooks() {
        return books.filter(book => book.category === 'Recommended');
      }
    
      static getAuthors() {
        return [...new Set(books.map(book => book.author))];
      }
    
      static getCategories() {
        return [...new Set(books.map(book => book.category))];
    }
  }

  const books = [
    new Book(1, 'The Hate U Give', 'Angie Thomas', 'Young Adult'),
    new Book(2, 'The Brief Wondrous Life of Oscar Wao', 'Junot Díaz', 'Fiction'),
    new Book(3, 'Sister Outsider', 'Audre Lorde', 'Non-Fiction'),
    //...
  ];