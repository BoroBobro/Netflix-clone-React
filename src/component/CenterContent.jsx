import React, { useEffect, useState } from "react";
import "./CenterContent.css"
import { Link } from "react-router-dom";

const sagas = [
    {
        name:"Terminator",
        search: "Terminator",
    },
    {
        name:"Rambo",
        search: "Rambo",
    },
    {
        name:"Nobody",
        search: "Nobody",
        type: "movie"
    },
];

const OMDB_API_KEY = "b1e372aa"

const CenterContent = () => {
    const [galleries, setGalleries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSaga = async (saga) =>{
            
            const res = await fetch(

        `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(
          saga.search
        )}&type=movie`
      );


      const data = await res.json();
      console.log(data);
      return{
        name: saga.name,
        movies: data.Search ? data.Search.slice(2,7) : [],
      };
        };


        const fetchAll = async () => {
            setLoading(true);
            const results = await Promise.all(sagas.map(fetchSaga));
            setGalleries(results);
            setLoading(false);
        };
        fetchAll()
    }, []);


if(loading) return <div className="center-content">Loading...</div>;

  return (
    <div className="center-content fluid ">
      {galleries.map((gallery, idx) => (
        <div className="gallery" key={idx}>
          <h3>{gallery.name}</h3>
          <div className="gallery-row fluid ">
            {gallery.movies.map((movie) => (
              <div className="movie-card" key={movie.imdbID}>
                <Link to={`/movie-details/${movie.imdbID}`}>
                  <img src={movie.Poster} alt={movie.Title} />
                </Link>
                <p>{movie.Title}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

};

export default CenterContent;