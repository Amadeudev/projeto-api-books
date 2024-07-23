import express from "express";
import { bookRouter } from "./routes/bookRoute.js";

const app = express()
const port = 4000

app.use(express.json());
app.use('/books', bookRouter);

app.listen(port, () => {
  console.log(`API Diversidade em Livros rodando na porta ${port}`)
});