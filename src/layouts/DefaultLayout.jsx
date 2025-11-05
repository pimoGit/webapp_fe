// importiamo parte outer di module react-router
import { Outlet } from "react-router-dom"

import Header from "../components/Header"
import Loader from "../components/Loader"

import { useGlobal } from "../contexts/GlobalContext"


const DefaultLayout = () => {

    const { isLoading } = useGlobal();

    return (
        <>
            <Header />
            <main className="container">
                <Outlet />
            </main>
            {isLoading && <Loader />}
        </>
    )
}

export default DefaultLayout