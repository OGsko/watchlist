import movieTimeImg from "../../assets/movie-time.jpg"
import styles from "./HomePage.module.css"

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1>Home Page</h1>
            <img src={movieTimeImg} alt="Movie-time" />
            <p>Time to watch!</p>
        </div>
    )
}

export default HomePage