


export function BookDetails({book}){

    return <section className="book-details">
        <h2>Book title : {book.title}</h2>
        <h3>Price: ${book.listPrice.amount}</h3>
        <p>Description: {book.description}</p>
        <img src={book.thumbnail} />
    </section>
}