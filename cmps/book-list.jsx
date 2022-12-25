import { BookPreview } from "../cmps/book-preview.jsx"

export function BookList({books, onSelectedBook}){

    return (
        <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                <div>
                    <button onClick={() => onSelectedBook(book.id)}>Book details</button>
                </div>
            </li>)
        }
    </ul>
    )
}