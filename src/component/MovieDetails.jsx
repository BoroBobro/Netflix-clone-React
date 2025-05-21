import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const OMDB_API_KEY = "b1e372aa";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            setLoading(true);
            const res = await fetch(
                `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${movieId}`
            );
            const data = await res.json();
            setMovie(data);
            setLoading(false);
        };
        if (movieId) fetchMovie();
    }, [movieId]);

    if (loading) return <div>Caricamento...</div>;
    if (!movie || movie.Response === "False") return <div>Film non trovato.</div>;

    return (
        <div>
            <h2>{movie.Title}</h2>
            <img src={movie.Poster} alt={movie.Title} />
            <p><strong>Anno:</strong> {movie.Year}</p>
            <p><strong>Genere:</strong> {movie.Genre}</p>
            <p><strong>Trama:</strong> {movie.Plot}</p>
            
        </div>
    );
};

export default MovieDetails;