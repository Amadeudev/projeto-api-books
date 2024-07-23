import { Router } from "express";
import { BookController } from "../controllers/bookController.js";

const bookRouter = Router()

bookRouter.get('/recommended', BookController.getRecommendedBooks);
bookRouter.get('/authors', BookController.getAuthors);
bookRouter.get('/categories', BookController.getCategories);

export { bookRouter }