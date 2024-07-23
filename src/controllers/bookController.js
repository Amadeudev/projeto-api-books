import { Book } from "../models/book.js"

let listBook = []

export const createBook = (req, res) => {
    const { id, title, author, category } = req.body
    const newBook = new Book(id, title, author, category)
    listBook.push(newBook)
    return res.status(201).json({newBook})
}

export const getAllBook = (req, res) => {
    return res.status(200).json({listBook})
}