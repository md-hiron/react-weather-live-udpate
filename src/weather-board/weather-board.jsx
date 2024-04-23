import {useContext} from "react"
import { WeatherContext } from "../context"
import AddFavorite from "./add-favorite"
import WeatherHeadline from "./weather-headline"
import WeatherCondition from "./weather-condition"

function WeatherBoard(){
    const {loading} = useContext(WeatherContext);
    return(
        <main>
            <section>
                <div className="container">
                    <div className="grid bg-black/20 rounded-xl backdrop-blur-md border-2 lg:border-[3px] border-white/[14%] px-4 lg:px-14 py-6 lg:py-10 min-h-[520px] max-w-[1058px] mx-auto">
                        <div className="grid md:grid-cols-2 gap-10 md:gap-6">
                            
                            { 
                                loading.state ? 
                                (<p className="w-full">{loading.message}</p>) :
                                (<>
                                    <AddFavorite />
                                    <WeatherHeadline />
                                    <WeatherCondition />
                                </>)
                            
                            }
                            

                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default WeatherBoard;