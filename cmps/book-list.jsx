import { BookPreview } from "../cmps/book-preview.jsx"

export function BookList({books}){
    console.log(books);

    return (
        <ul className="book-list">
        {
            books.map(book => <li key={book.id}>
                <BookPreview book={book} />
                {/* <div>
                    <button onClick={() => onRemoveCar(car.id)}>Remove car!</button>
                    <button onClick={() => onSelectCar(car.id)}>Select car!</button>
                </div> */}
            </li>)
        }
    </ul>
    )
}