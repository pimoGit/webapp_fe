// importiamo le page che utilizziamo
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import NotFoundPage from './pages/NotFoundPage';
import CreateBookPage from './pages/CreateBookPage';



// importiamo il layout
import DefaultLayout from './layouts/DefaultLayout';

// impotiamo la parte di gestione rotte da modulo react-router
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="/books/create" element={<CreateBookPage />} />
                    <Route path="/books/:id" element={<BookPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
