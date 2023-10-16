import './style.scss'
import Header from './components/Header'
import Footer from './components/footer'
import "./App.css";
import movieList from "./components/Data";

function App() {

  return (
    <>
      <Header/>
      <MovieCard film={movieList[FilmIndex]} />
      <Footer />
    </>
  );
}

export default App;
