// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"

const Header = () => {

    return (
        <nav className="navbar bg-body-tertiary mb-4">
            <div className="container-fluid justify-content-start">
                <Link className="navbar-brand" to="/">Bool Books</Link>
                <Link className="btn btn-sm btn-secondary" to="/books/create">Add Book</Link>
            </div>
        </nav>
    )

}


export default Header