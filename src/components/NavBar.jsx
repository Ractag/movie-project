import React from "react";

const NavBar = ({ movieList, movieIndex, setMovieIndex, rating, setRating }) => {

  const handleClick = () => {
    if (movieIndex < movieList.length - 1)
      setMovieIndex(movieIndex + 1);

  
  };
  const lessClick = () => {
    if (movieIndex > 0) setMovieIndex(movieIndex - 1);
 

  };


  return (
    <div className="button-container">
      <button className="button" onClick={lessClick}>
        PRECEDENT
      </button>
      <button className="button" onClick={handleClick}>
        SUIVANT
      </button>
    </div>
  );
};

export default NavBar;
