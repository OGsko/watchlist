import type { IContent } from "../../../interface"
import styles from "./ContentCard.module.css"
import AddToWatchlist from "../AddToWatchlistBtn/AddToWatchlistBtn"

export type IContentGridProps = {
    items: IContent[]
}

const ContentCard = ({items} : IContentGridProps) => {



    return <div className={styles.container}>
        {items.map(item => (
            <div key={item.id} className={styles.card}
            style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500${item.poster_path})`, }}>

                <AddToWatchlist/>

                <div className={styles.titleContainer}>
                    <p>{"title" in item ? item.title : item.name}</p>
                    <p>{"release_date" in item
                        ? item.release_date
                        : item.first_air_date}</p>
                </div>

            </div>
        ))}
    </div>
}

export default ContentCard



