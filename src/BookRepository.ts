/*
Методы, которые должны быть в BooksRepository:
1. createBook(book){} — создание книги.
2. getBook(id){} — получение книги по id.
3. getBooks(){} — получение всех книг.
4. updateBook(id){} — обновление книги.
5. deleteBook(id){} — удаление книги.
*/
import Book from "./bookInterface"; 

abstract class BooksRepository {
    createBook(book: Book){}
    getBook(id: string){}
    getBooks(){}
    updateBook(id: string){}
    deleteBook(id: string){}
}

export default BooksRepository