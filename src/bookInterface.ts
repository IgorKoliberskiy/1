// Напишите интерфейс к сущности «книга» к разрабатываемому приложению «библиотека»
export default interface Book {
    id: string,
    title: string,
    description: string,
    authors: string,
    favorite: string,
    fileCover: string,
    fileName: string,
    fileBook: string,
}