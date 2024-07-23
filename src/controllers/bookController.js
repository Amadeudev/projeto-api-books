import { Book } from "../models/book.js"

let listBook = []

export const createBook = (req, res) => {
    const { id, title, author, category } = req.body
    const newBook = new Book(id, title, author, category)
    listBook.push(newBook)
    return res.status(201).json({newBook})
}

export const searchAuthor = (req, res) => {
    const { author } = req.body
    const authors = listBook.filter(books => books.author == author) 
    return res.status(200).json({authors})

}

export const getAllBook = (req, res) => {
    return res.status(200).json({listBook})
}