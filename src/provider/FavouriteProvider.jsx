/* eslint-disable react/prop-types */
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavouriteProvider = ({children}) => {
    const [favourite, setFavourite] = useLocalStorage('favourites', []);

    const addToFavourites = (latitude, longitude, location) => {
        setFavourite([
            ...favourite,
            {
                latitude,
                longitude,
                location
            }
        ])
    }

    const removeFromFavourites = (location) => {
        const restFavourite = favourite.filter( fav => fav.location !== location );
        setFavourite(restFavourite);
    }
    return(
        <FavouriteContext.Provider value={{favourite, addToFavourites, removeFromFavourites}}>
            {children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteProvider;