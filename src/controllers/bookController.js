import { Book } from "../models/book.js"

export const BookController = (req, res) => {
  async getRecommendedBooks(req, res) {
    const recommendedBooks = await Book.getRecommendedBooks();
    res.json(recommendedBooks);
  }

  async getAuthors(req, res) {
    const authors = await Book.getAuthors();
    res.json(authors);
  }

  async getCategories(req, res) {
    const categories = await Book.getCategories();
    res.json(categories);
  }
}

export default BookController;