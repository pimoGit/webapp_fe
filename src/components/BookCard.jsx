import { Link } from "react-router-dom"


const BookCard = ({ bookProp }) => {

    const { id, title, author, abstract, image } = bookProp;

    return (
        <div className="card mb-4">
            <img className="card-img-top"
                src={image}
                alt={title} />
            <div className="card-body">
                <h5 className="card-title">
                    {title}
                </h5>
                <address><i>
                    By {author}
                </i></address>
                <p className="card-text">
                    {abstract}
                </p>
                <Link to={`books/${id}`} className="btn btn-primary">See more</Link>
            </div>
        </div>
    )
}

export default BookCard