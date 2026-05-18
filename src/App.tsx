import { useState } from "react"
import Header from "./components/layout/Header/Header"
import Footer from "./components/layout/Footer/Footer"
import HomePage from "./pages/HomePage/HomePage"
import MoviesPage from "./pages/MoviesPage/MoviesPage"
import SeriesPage from "./pages/SeriesPage/SeriesPage"

const App = () => {
  const [CurrentPage, setCurrentPage] = useState("home")

  const changePage = (page: string) => {
    setCurrentPage(page)
  }

  const showPage = () => {
    switch(CurrentPage) {
      case "home": 
        return <HomePage/>
      case "movies": 
        return <MoviesPage/>
      case "series": 
        return <SeriesPage/>
      case "watchlist": 
        return <h1>Watchlist</h1>
      default : 
      return <HomePage/>
    }
  }

  return <div>
    <Header changePage={changePage} />
    {showPage()}

    <Footer/>
  </div>
}

export default App