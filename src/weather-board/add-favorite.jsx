import { useContext, useState, useEffect } from "react";
import heart from '../assets/heart.svg'
import redHeart from "../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../context";
export default function AddFavorite(){
    const {favourite, addToFavourites, removeFromFavourites} = useContext(FavouriteContext);
    const {weatherData} = useContext(WeatherContext);
    const {latitude, longitude, location} = weatherData;
    const [isFavourite, setIsFavourite] = useState(false);
    
    useEffect(() => {
        const founds = favourite.find( fav => fav.location === location );
        setIsFavourite(founds)
    },[]);
    function handleTogggleFavourite(){
        const founds = favourite.find( fav => fav.location === location );

        if( !founds ){
            addToFavourites(latitude, longitude, location)
        }else{
            removeFromFavourites(location)
        }

        setIsFavourite(!isFavourite);
    }
    return(
        <div className="md:col-span-2">
            <div className="flex items-center justify-end space-x-6">
                <button className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]" onClick={handleTogggleFavourite}>
                    <span>Add to Favourite</span>
                    <img src={isFavourite ? redHeart : heart} alt="" />
                </button>
                
            </div>
        </div>

    )
}