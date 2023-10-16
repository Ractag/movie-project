import './App.css'
import NavBar from './components/NavBar'

function App() {
  

  return (
    <div>
      <NavBar movies={movies} setMovies={setMovies} movieList={movieList}/>
    </div>
  )
}

export default App
