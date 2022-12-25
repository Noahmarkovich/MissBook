import { bookService } from "../services/book.service.js"

import { BookList } from "../cmps/book-list.jsx"
import { BookDetails } from "../cmps/book-details.jsx"
import { BookFilter } from "../cmps/book-filter.jsx"

const { useState, useEffect } = React


export function BookIndex(){
    const [books, setBooks] = useState([])
    const [selectedBook, setSelectedBook] = useState(null)
    const [filterBy, setFilterBy] = useState(bookService.getDefaultFilter())

    useEffect (()=> {
        loadBooks()
    } , [filterBy]
    )

    function loadBooks(){
        bookService.query(filterBy).then(filteredBooks => setBooks(filteredBooks))
    }

    function onSelectedBook(bookId){
        console.log(bookId);
        bookService.get(bookId).then((book) => {
            setSelectedBook(book)})
    }

    function onSetFilter(filterByFromFilter){
        setFilterBy(filterByFromFilter)
    }
    
    
    return (
    <section className="book-index">

        {!selectedBook && <div>
        <BookFilter onSetFilter={onSetFilter}/>
        <BookList books= {books} onSelectedBook= {onSelectedBook} />
        </div>}
        
        {selectedBook && <BookDetails book= {selectedBook}/>}
    </section>

    )
}