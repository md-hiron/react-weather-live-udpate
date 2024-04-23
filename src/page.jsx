import Header from "./Header/header"
import WeatherBoard from "./weather-board/weather-board"
export default function Page(){
    return(
        <div className="bg-body font-[Roboto] text-white bg-[url('./assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
            <Header />
            <WeatherBoard />
        </div>
    )
}