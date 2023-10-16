import React from "react";

const NavBar = ({ movieList, movieIndex, setMovieIndex }) => {
  const handleClick = () => {
    if (movieIndex < movieList.length - 1) setMovieIndex(movieIndex + 1);
  };
  const lessClick = () => {
    if (movieIndex > 0) setMovieIndex(movieIndex - 1);
  };

  return (
    <div>
      <button onClick={lessClick}>PRECEDENT</button>
      <button onClick={handleClick}>SUIVANT</button>
    </div>
  );
};

export default NavBar;
