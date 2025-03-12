// uso axios
import axios from 'axios'

// uso di state e effect
import { useState, useEffect } from "react"

// importiamo parte LInk del modulo react-router
import { Link, useParams, useNavigate } from "react-router-dom"

// import del componente di listato
import ReviewCard from './../components/ReviewCard';


const BookPage = () => {

    // recuperiamo l'id del libro richiesto
    const { id } = useParams();

    // utilizzo per il redirect (useNavigate)
    const redirect = useNavigate();

    // settiamo lo stato del componente
    const [book, setBook] = useState({});

    // funzione di chiamata all'API per il libro richiesto
    const fectBook = () => {
        axios.get("http://localhost:3000/api/books/" + id)
            .then(
                res => {
                    // console.log(res.data);
                    setBook(res.data)
                }
            )
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
            }

            )
    }


    // chiamata all'API al montaggio del componente
    useEffect(fectBook, [])

    // funzione di rendering delle reviews
    const renderReviews = () => {
        return book.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={review} />
        )
        // console.log(book.reviews);
    }

    return (
        <>
            <header id="book" className="border-bottom border-1 mb-3">
                <div className="d-flex mb-3">
                    <img className="book-img"
                        src={book.image}
                        alt={book.title} />
                    <div>
                        <h1>{book.title}</h1>
                        <h3 className="text-muted">
                            <i>
                                By {book.author}
                            </i>
                        </h3>
                        <p>
                            {book.abstract}
                        </p>
                    </div>
                </div>

            </header>

            <section id="reviews">
                <header className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Our community reviews</h4>
                </header>
                {/* Reviews qui */}
                {renderReviews()}
            </section>

            <footer className="border-top border-1 pt-2 mb-3 d-flex justify-content-end">
                <Link className="btn btn-secondary" to="/">Back to home</Link>
            </footer>
        </>
    )
}

export default BookPage