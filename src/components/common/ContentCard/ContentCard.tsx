import type { IContent } from "../../../interface"
import AddToWatchlist from "../AddToWatchlistBtn/AddToWatchlistBtn"
import styles from "./ContentCard.module.css"

export type IContentGridProps = {
    items: IContent[]
}

const ContentCard = ({items} : IContentGridProps) => {
    return <div className={styles.container}>
        {items.map(item => (
            <div key={item.id} className={styles.card}>
                <p>{item.title}</p>
                <AddToWatchlist/>
            </div>
        ))}
    </div>
}

export default ContentCard



//BYT UT DETTA FRÅN CONTENTGRID TILL CONTENTCARD. DETTA ENLIGT KOMPONENTTRÄDET!