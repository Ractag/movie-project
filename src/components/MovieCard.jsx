import React from "react";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ film }) => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="movie-container">
      <h2>{film.title}</h2>
      <img className="movie-img" src={film.image} alt={film.name} />
      <p>{film.description}</p>
      <div className="stars-container">
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={40}
          activeColor="#ffd700"
        />,
      </div>
    </div>
  );
};

export default MovieCard;
