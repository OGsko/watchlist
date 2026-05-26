import { useEffect, useState } from "react"
import ContentGrid from "../../components/common/ContentGrid/ContentGrid"
import FilterDropdown from "../../components/common/FilterDropdown/FilterDropdown"
import styles from "./MoviePage.module.css"
import type { IcontentMovie } from "../../interface"



const MoviesPage = () => {
    const [movies, setMovies] = useState<IcontentMovie[]>([])
    
    
    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const respone = await fetch (
                    `https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_API_KEY}`,
                )
                const data = await respone.json()

                console.log("data", data)

                setMovies(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchMovies()
    }, [])


    return (
        <div className={styles.container}>
        <FilterDropdown/>
        <ContentGrid items={movies}/>
        </div>
    )
}

export default MoviesPage