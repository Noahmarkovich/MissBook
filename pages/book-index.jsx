import { bookService } from "../services/book.service.js"
import { BookList } from "../cmps/book-list.jsx"

const { useState, useEffect } = React


export function BookIndex(){
    const [books, setBooks] = useState([])

    useEffect (()=> {
        loadBooks()
    } , []
    )

    function loadBooks(){
        bookService.query().then(books => setBooks(books))
    }
    
    
    return (
    <section className="book-index">
        <BookList books= {books}/>
    </section>

    )
}