// importiamo le page che utilizziamo
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';

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
                    <Route path="/books/:id" element={<BookPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
