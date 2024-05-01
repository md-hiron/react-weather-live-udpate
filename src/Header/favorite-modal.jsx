import {useContext} from "react"
import { FavouriteContext, LocationContext } from "../context";

export default function FavoriteModal(){
    const {favourite} = useContext(FavouriteContext);
    const {setSelectLocation} = useContext(LocationContext)

    function onFavoriteClick(location){
        const findLocation =  favourite.find( (item) => item.location === location );
        console.log(findLocation);
        setSelectLocation({...findLocation});
    }
    return(
        <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
            <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
            {
                favourite.length > 0 ? 
                (
                    <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
                        { favourite.map( fav => (
                            <li key={fav.location} onClick={() => onFavoriteClick(fav.location)} className="hover:bg-gray-200">{fav.location}</li>
                        ) ) }
                        
                    </ul>
                ) :
                <p className="px-4">Favourite location is empty</p>
                
            }
            
        </div>
    )
}