import ContentGrid from "../../components/common/ContentGrid/ContentGrid"
import FilterDropdown from "../../components/common/FilterDropdown/FilterDropdown"
import type { Icontentseries } from "../../interface"
//import type { IContent } from "../../interface"
import styles from "./SeriesPage.module.css"
import { useEffect, useState } from "react"



const SeriesPage = () => {
    const [series, setSeries] = useState<Icontentseries[]>([])
    
    
    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const respone = await fetch (
                    `https://api.themoviedb.org/3/tv/popular?api_key=${import.meta.env.VITE_API_KEY}`,
                )
                const data = await respone.json()

                console.log("data", data)

                setSeries(data.results)
            } catch (error) {
                console.log(error)
            }
        }
        fetchSeries()
    }, [])

    return (
        <div className={styles.container}>
            <FilterDropdown/>
            <ContentGrid items={series}/>
        </div>

    )
}

export default SeriesPage