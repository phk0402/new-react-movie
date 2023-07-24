import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const {id} = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setDetail(json.data.movie);
    setLoading(false);
  }

  useEffect(() => {
    getMovie();
  }, [])

  console.log(detail)

  return (
    <div>
      {loading ?
        <h1>Loading...</h1> :
        <div>
          <img src={detail.medium_cover_image} alt=""/>
          <h1>{detail.title}</h1>
          <span>{detail.genres[0]}</span>
          <span>{detail.genres[1]}</span>
          <span>{detail.runtime}mins</span>
          <p>{detail.description_intro}</p>
        </div>
      }
    </div>
  );
};

export default Detail;