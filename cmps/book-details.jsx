
const { useState, useEffect } = React

export function BookDetails({book}){

    // const [pageCount , onPageCount] = useState('')


    function checkPageCount(book){
        const currPageCount = book.pageCount
        if (currPageCount > 500) return 'Serious Reading'
        else if (currPageCount > 200) return 'Descent Reading'
        else if (currPageCount < 100) return 'Light Reading'
        else return 
    }

    function checkDate(book){
        const bookPublishedDate = book.publishedDate
        console.log(bookPublishedDate);
        if(2022-bookPublishedDate > 10 ) return 'Vintage'
        else if(2022-bookPublishedDate < 1 ) return 'New'
        else return

    }

    function getPriceColor(book){
        const bookPrice = book.listPrice.amount
        if (bookPrice>150) return "red"
        else if (bookPrice<20) return "green"
        else return

    }

    return <section className="book-details">
        <h2>Book title : {book.title}</h2>
        {book.listPrice.isOnSale && <h2>On Sale!!</h2>}
        <h3 className={getPriceColor(book)}>Price: ${book.listPrice.amount}</h3>
        <p>Description: {book.description}</p>
        { checkPageCount(book) && <h1>{checkPageCount(book)}</h1>}
        {  checkDate(book) && <h1>{checkDate(book)}</h1>}
        <img src={book.thumbnail} />
    </section>
}