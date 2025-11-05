// uso axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// import componente card
import BookCard from './../components/BookCard';

import { useGlobal } from '../contexts/GlobalContext';



const HomePage = () => {

    const { setIsLoading } = useGlobal();

    // settiamo lo stato del componente
    const [books, setBooks] = useState([]);

    // funzione di fetching dei dati lista libri (index)
    const fectBooks = () => {
        setIsLoading(true);
        axios.get("http://localhost:3000/api/books")
            .then(
                res => {
                    // console.log(res.data);
                    setBooks(res.data)
                }
            )
            .catch(err => console.log(err)
            )
            .finally(setIsLoading(false))
    }

    // fectBooks();
    useEffect(fectBooks, [])

    // funzione di rendering delle card dei libri
    const renderBooks = () => {
        return books.map(
            book => {
                return (
                    <div className="col" key={book.id} >
                        <BookCard bookProp={book} />
                    </div>
                )
            }
        )
    }

    return (
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2><i>The nerdest book community</i></h2>

            <div className="row row-cols-3 mt-4">
                {/* Libri qui */}
                {renderBooks()}
            </div>
        </>
    )
}

export default HomePage