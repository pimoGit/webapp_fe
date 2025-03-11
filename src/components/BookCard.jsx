import { Link } from "react-router-dom"


const BookCard = () => {
    return (
        <div className="card mb-4">
            <img className="card-img-top"
                src="http://localhost:3000/img/books/great-gatsby.jpg"
                alt="descrizione img" />
            <div className="card-body">
                <h5 className="card-title">
                    Titolo del libro
                </h5>
                <address><i>
                    By nome autore
                </i></address>
                <p className="card-text">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore ad sapiente animi incidunt. Sit nihil sed, aliquam rerum ipsam illo optio impedit aperiam molestiae.
                </p>
                <Link to="books/2" className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default BookCard