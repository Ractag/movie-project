import Footer from './components/footer'
import { useState } from "react";
import "./App.css";
import movieList from "./components/Data";

function App() {
  const [FilmIndex, setFilmIndex] = useState(0);

  return (
    <>
      <MovieCard film={movieList[FilmIndex]} />
      <Footer />
    </>
  );
}

export default App;
