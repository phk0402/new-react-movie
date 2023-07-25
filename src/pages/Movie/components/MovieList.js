import PropTypes from "prop-types";
import {Link} from "react-router-dom";

const MovieList = ({id, coverImg, title, summary, genres}) => {
    return (
        <li className="card">
            <Link to={`/movie/${id}`}>
                <div className="img-wrap">
                    <img src={coverImg} alt={title}/>
                </div>
            </Link>
            <h2>{title}</h2>
        </li>
    )
}

MovieList.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default MovieList;