import React from "react";

const MovieCard = ({ film }) => {
  return (
    <div className="movie-container">
      <h2>{film.title}</h2>
      <img className="movie-img" src={film.image} alt={film.name} />
      <p>{film.description}</p>
    </div>
  );
};

export default MovieCard;
