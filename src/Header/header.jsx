import Logo from "./logo"
import Search from "./search"
import Favorite from "./favorite"
import FavoriteModal from "./favorite-modal"
import { useState } from "react"

export default function Header(){
    const [showModal, setShowModal] = useState(false)
    console.log(showModal);
    return(
        <>
            <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
                <nav className="container flex items-center justify-between py-6 mx-auto">
                    <Logo />

                    <div className="flex items-center gap-4 relative">
                        <Search />
                        <Favorite onFavoriteClick={ () => setShowModal( !showModal ) } />
                        { showModal && <FavoriteModal /> }
                        
                    </div>
                </nav>
            </header>
        </>
    )
}