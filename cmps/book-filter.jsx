const { useState, useEffect } = React

import { bookService } from "../services/book.service.js"

export function BookFilter({onSetFilter}){

    const [editedFilterBy, setEditedFilterBy] = useState(bookService.getDefaultFilter())

    useEffect(()=>{
        onSetFilter(editedFilterBy)
    }, [editedFilterBy])

    function handleChange({target}){
        let { value, name: field, type } = target
        console.log(value);
        value = (type === 'number') ? +value : value
        setEditedFilterBy((prevFilter)=>{
            return {...prevFilter, [field] : value}
        })

    }

    function onSubmitFilter(ev){
        ev.preventDefault()
        
        onSetFilter(editedFilterBy)
    }

    return <section className="book-filter">
        <h1>Filter books by</h1>
        <form onSubmit={onSubmitFilter}>
        <label htmlFor="title">Book title:</label>
            <input type="text"
                id="title"
                name="txt"
                placeholder="By title"
                value={editedFilterBy.txt}
                onChange={handleChange}
            />
            <label htmlFor="minPrice">Book min price:</label>
            <input type="number"
                id="minPrice"
                name="minPrice"
                placeholder="By price"
                value={editedFilterBy.minPrice}
                onChange={handleChange}
            />
            <button>Filter</button>
        </form>

    </section>
}