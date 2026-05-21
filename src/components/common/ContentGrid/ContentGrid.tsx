import type { IContent } from "../../../interface"
import ContentCard from "../ContentCard/ContentCard"
import styles from "./ContentGrid.module.css"


export type IContentGridProps = {
    items: IContent[]
}

const ContentGrid = ({items}: IContentGridProps) => {
   return <div className={styles.container}>

        <ContentCard items = {items}/>
    </div>
}

export default ContentGrid