const { useState } = React

import {Home} from './pages/home.jsx'
import {About} from './pages/about.jsx'
import {BookIndex} from './pages/book-index.jsx'

export function App() {

    const [page, setPage] = useState('book')

    return <section className="app">
        <header className="app-header">
            <h1>Miss Book</h1>
            <nav>
                <ul>
                <a href="#" onClick={() => setPage('home')}>Home</a> | 
                <a href="#" onClick={() => setPage('about')}>About us</a> | 
                <a href="#" onClick={() => setPage('book')}>Our books</a>
                </ul>
            </nav>
        </header>
        <main>
            {page === 'home' && <Home/>}
            {page === 'about' && <About/>}
            {page === 'book' && <BookIndex/>}
        </main>
    </section>
}