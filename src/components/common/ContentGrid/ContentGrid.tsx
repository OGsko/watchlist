import type { IContent } from "../../../interface"
import AddToWatchlist from "../AddToWatchlistBtn/AddToWatchlistBtn"
import styles from "./ContentGrid.module.css"

export type IContentGridProps = {
    items: IContent[]
}

const ContentGrid = ({items} : IContentGridProps) => {
    return <div className={styles.container}>
        {items.map(item => (
            <div key={item.id} className={styles.card}>
                <p>{item.title}</p>
                <AddToWatchlist/>
            </div>
        ))}
    </div>
}

export default ContentGrid