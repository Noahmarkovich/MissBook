import { utilService } from './util.service.js'
import { storageService } from './async-storage.service.js'

const BOOK_KEY = 'bookDB'
_createBooks()

export const bookService = {
    query,
    get,
    getDefaultFilter
}



function query(filterBy) {
    return storageService.query(BOOK_KEY)
        .then(books => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                books = books.filter(book => regex.test(book.title))
            }
            if (filterBy.minPrice) {
                books = books.filter(book => book.listPrice.amount >= filterBy.minPrice)
            }
            return books
        })
}

function getDefaultFilter() {
    return { txt: '', minPrice: '' }
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
    // return axios.get(CAR_KEY, carId)
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = []
        books.push(_createBook('Alices Adventures in Wonderland', 'Illo recusandae ea a iste modi magni amet.', 'Alices Adventures in Wonderland', 20 ))
        books.push(_createBook('Madame Bovary', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae, repellendus.', 'Madame Bovary',  30 ))
        books.push(_createBook('Moby Dick', 'Lorem ipsum dolor sit amet consectetur.', 'Moby Dick',  25 ))

        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, description, imgName, amount) {
    const car = {
        id : utilService.makeId(),
        title,
        description,
        thumbnail : `img/${imgName}.jpg`,
        listPrice:{
            amount,
            currencyCode: "USD" ,
            isOnSale : false
        }
    }
    return car
}