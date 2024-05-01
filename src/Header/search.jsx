import {useState, useContext} from 'react'
import searchIcon from '../assets/search.svg'
import { getLocations } from '../data/location-data'
import { LocationContext } from '../context';

export default function Search(){
    const [searchTerm, setSearchTerm] = useState('');
    const [cities, setCities] = useState(null);
    const locations = cities ? cities : getLocations();
    const {setSelectLocation} = useContext(LocationContext)

    function onSearchChange(e){
        const typedValue = e.target.value;
        setSearchTerm(typedValue);
        if( searchTerm.length > 0 ){
            const filteredCity = locations.filter( location => location.location.toLowerCase().includes(searchTerm.toLowerCase()) )
            setCities([...filteredCity]);
        }else{
            setCities(null);
        }
        
    }

    function onLocationClick(location){
        const findLocation =  locations.find( (item) => item.location === location );
        console.log(findLocation);
        setSelectLocation({...findLocation});
        setSearchTerm('')
    }
    
    return(
        <form action="#">
            <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
                <div className="relative">
                    <input 
                        className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
                        type="search" 
                        placeholder="Search Location"
                        value={searchTerm}
                        onChange={onSearchChange} 
                        required 
                    />
                    { searchTerm.length > 0 ?
                        <div className="bg-white py-3 px-4 absolute left-0 w-full top-10">
                            { locations.length > 0 ?
                                <ul>
                                    { locations.map( location => (
                                        <li 
                                            className="text-black text-lg py-2 border-b border-[#d4d4d4] cursor-pointer" 
                                            key={location.location}
                                            onClick={() => onLocationClick(location.location)}
                                        >
                                            {location.location}
                                        </li>
                                    ) ) }
                                </ul> :
                                <p className="text-black">No location Found</p>

                            }
                            
                        </div> :
                        ''
                    }
                </div>
                
                <button type="submit">
                    <img src={searchIcon} />
                </button>
            </div>
        </form>
    )
}