import { useState } from "react";

function NavBar({ movies, setMovies, movieList }) {

    const [movies, setMovies] = useState(0)

    const lessClick = () => {
        if (movies > 0)
            setMovies(movies - 1);
    };
    const handleClick = () => {
        if (movies < movieList.length - 1)
            setMovies(movies + 1);
    }


    return (
        <div>
            <button onClick={lessClick}>Précédent</button>
            <button onClick={handleClick}>Suivant</button>
        </div>
    );
};


export default NavBar; 