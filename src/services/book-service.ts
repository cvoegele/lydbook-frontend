import {Book} from "../entities/Book";
import {Author} from "../entities/Author";
import {Series} from "../entities/Series";

export function getBookById(bookId: number, callback: (book: Book) => void) {
    fetch(`/api/v1/audiobook/${bookId}/`, {method: "GET"})
        .then(r => {
            console.log(r);
            return r;
        })
        .then((r) => r.json())
        .then(json => {
            return new Book(json.id,
                json.dataName,
                json.title,
                new Author(json.author.id, json.author.name, []),
                new Series(0, "", []),
                new Date(json.uploadDate),
                json.bookNumber,
                getLengthOfBook(),
                getAccentColorOfBook())
        }).then(book => callback(book))
}

export function getAccentColorOfBook() {
    //TODO: real implementation
    return `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, 1)`;
}

export function getLengthOfBook() {
    //TODO: real implementation
    return Math.random() * 2000 + 500
}

export function getListeningPositionOfBookByUser(username: string, bookId: number) {
    //TODO: real implementation
    return Math.random() * 100 + 1;
}

export function getBooksByUser(username: string, callback: (books: Book[]) => void) {
    //TODO: real implementation
    let books: Book[] = []

    function callback_Mock(book: Book) {
        books.push(book)
        books.push(book)
        books.push(book)
        callback(books)
    }
    getBookById(10000, callback_Mock)
}
