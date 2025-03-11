import BookCard from './../components/BookCard';


const HomePage = () => {
    return (
        <>
            <h1 className="text-primary">Bool Books</h1>
            <h2><i>The nerdest book community</i></h2>

            <div className="row row-cols-3 mt-4">
                {/* Libri qui */}
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
                <BookCard />
            </div>
        </>
    )
}

export default HomePage