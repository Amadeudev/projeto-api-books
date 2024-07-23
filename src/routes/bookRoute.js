import { Router } from "express";
import { createBook, getAllBook, searchAuthor } from "../controllers/bookController.js";

const bookRouter = Router()

bookRouter.post('/create', createBook)
bookRouter.get('/recommended', getAllBook);
bookRouter.get('/authors', searchAuthor);
bookRouter.get('/categories', getAllBook);

export { bookRouter }