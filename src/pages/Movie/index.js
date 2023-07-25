import {useEffect, useState} from "react"
import MovieList from "./components/MovieList"
import "../../assets/movieList.scss";

const Movie = () => {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const json = await (await (fetch("\n" +
            "https://api.themoviedb.org/3/movie/now_playing?api_key=ee424dad1a8fdd9ad4a5e461b503e8b7&language=en-US&page=1"))).json();
        setMovies(json.results);
        setLoading(false);
    };

   const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w300";

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <main className="l__main">
            {loading ?
                <h1>Loading...</h1> :
                <ul className="movie-list">
                    {movies.map((movie) => (
                        <MovieList
                            key={movie.id}
                            id={movie.id}
                            coverImg={IMAGE_BASE_URL + movie.poster_path}
                            title={movie.title}
                            // summary={movie.summary}
                            genres={movie.genre_ids}
                        />
                    ))}
                </ul>
            }
        </main>
    )
}

export default Movie;