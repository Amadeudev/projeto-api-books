import { Router } from "express";
import { createBook, getAllBook } from "../controllers/bookController.js";

const bookRouter = Router()

bookRouter.post('/create', createBook)
bookRouter.get('/recommended', getAllBook);
bookRouter.get('/authors', getAllBook);
bookRouter.get('/categories', getAllBook);

export { bookRouter }