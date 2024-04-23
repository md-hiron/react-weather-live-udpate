import Page from "./page"
import { WeatherProvider, FavouriteProvider } from "./provider"

function App() {
    
  return (
    <>
    <WeatherProvider>
      <FavouriteProvider>
        <Page />
      </FavouriteProvider>
      
    </WeatherProvider>
    </>
  )
}

export default App
