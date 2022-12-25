

export function BookPreview({book}){
   
   return <article className="book-preview">
        <h2>Book name: {book.title}</h2>
        <h3>Price: ${book.listPrice.amount}</h3>
        <img src={book.thumbnail} />
    </article>

}