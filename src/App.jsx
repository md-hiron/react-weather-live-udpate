import Page from "./page"
import { WeatherProvider, FavouriteProvider, LocationProvider } from "./provider"

function App() {
    
  return (
    <>
    <LocationProvider>
      <WeatherProvider>
        <FavouriteProvider>
          <Page />
        </FavouriteProvider>
        
      </WeatherProvider>
    </LocationProvider>
    
    </>
  )
}

export default App
