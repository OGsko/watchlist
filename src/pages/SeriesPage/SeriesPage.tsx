import ContentGrid from "../../components/common/ContentGrid/ContentGrid"
import FilterDropdown from "../../components/common/FilterDropdown/FilterDropdown"
import type { IContent } from "../../interface"
import styles from "./SeriesPage.module.css"



const SeriesPage = () => {
    const series : IContent [] = [
    {id:1, title: "The Office"},
    {id:2, title: "Big bang theory"},
    {id:3, title: "Young Sheldon"},
    {id:4, title: "South Park"}
    ]

    return (
        <div className={styles.container}>
            <FilterDropdown/>
            <ContentGrid items={series}/>
        </div>

    )
}

export default SeriesPage