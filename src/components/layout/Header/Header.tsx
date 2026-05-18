import styles from "./Header.module.css"

type HeaderProps = {
    changePage: (page:string) => void
}

const Header = ({changePage}: HeaderProps) => {
    return (
        <div className={styles.meny}>
            <h1>WatchList</h1>
            <ul className={styles.ul}>
                <li><button onClick={() => changePage("home")}>
                    Home
                    </button></li>
                <li><button onClick={() => changePage("movies")}>
                    Movies
                    </button></li>
                <li><button onClick={() => changePage("series")}>
                    Series
                    </button></li>
                <li><button onClick={() => changePage("watchlist")}>
                    Watchlist
                    </button></li>
            </ul>
        </div>
    )
}

export default Header