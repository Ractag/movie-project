import "./style.scss";
import Header from "./components/Header";
import Footer from "./components/Footer";
import movieList from "./components/Data";
import NavBar from "./components/NavBar";
import { useState } from "react";
import MovieCard from "./components/MovieCard";
import Stars from "./components/Stars";

function App() {
  const [movieIndex, setMovieIndex] = useState(0);
  const [rating, setRating] = useState(0)

  return (
    <div className="container">
      <Header />
      <MovieCard film={movieList[movieIndex]} />
      <Stars rating={rating} setRating={setRating} />
      <NavBar
        setMovieIndex={setMovieIndex}
        movieIndex={movieIndex}
        movieList={movieList}
      />
      <Footer />
    </div>
  );
}

export default App;
