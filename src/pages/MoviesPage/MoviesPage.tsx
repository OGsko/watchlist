import ContentGrid from "../../components/common/ContentGrid/ContentGrid"
import FilterDropdown from "../../components/common/FilterDropdown/FilterDropdown"
import type { IContent } from "../../interface"
import styles from "./MoviePage.module.css"



const MoviesPage = () => {
    const movies : IContent [] = [
    {id:1, title: "Ones upon a time in Hollywood"},
    {id:2, title: "7e inseglet"},
    {id:3, title: "Pulp Fiction"},
    {id:4, title: "Full Metal Jacket"}
    ]

    return (
        <div className={styles.container}>
        <FilterDropdown/>
        <ContentGrid items={movies}/>
        </div>
    )
}

export default MoviesPage