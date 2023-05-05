import { useState } from "react";
import MoviesList from "./MoviesList";
import Search from "./Search";
import AddMovie from "./AddMovie";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Spiderman 3",
      description: "Superhero",
      posterURL:
        "https://m.media-amazon.com/images/M/MV5BYTk3MDljOWQtNGI2My00OTEzLTlhYjQtOTQ4ODM2MzUwY2IwXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
      rate: 2,
    },
    {
      id: 2,
      title: "Justice League",
      description: "Superhero",
      posterURL: "https://i.ibb.co/Zd51z5c/justice-league.jpg",
      rate: 3,
    },
    {
      id: 3,
      title: "Shazam",
      description: "Superhero",
      posterURL:
        "https://assets-prd.ignimgs.com/2023/01/24/shzam2-vert-main-2764x4096-dom-1674589983500.jpg",
      rate: 4,
    },
    {
      id: 4,
      title: "The Notebook",
      description: "romance",
      posterURL: "https://fffmovieposters.com/wp-content/uploads/10734.jpg",
      rate: 1,
    },
    {
      id: 5,
      title: "Ratatouille",
      description: "Animation",
      posterURL:
        "https://ih1.redbubble.net/image.1715440668.7549/poster,504x498,f8f8f8-pad,600x600,f8f8f8.jpg",
      rate: 5,
    },
  ]);
  const [nameSearch, setnameSearch] = useState("");
  const [rating, setRating] = useState(1);
  const getInput = (keyword) => {
    setnameSearch(keyword);
  };
  const getRate = (rate) => {
    setRating(rate);
  };
  const addNewMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
  };

  return (
    <div>
      <header>
        <h1 className="topHeading">Best Movie App</h1>
      </header>
      <Search getInput={getInput} getRate={getRate} />
      <AddMovie addNewMovie={addNewMovie} />
      <MoviesList
        movies={movies.filter(
          (movie) =>
            movie.rate >= rating &&
            movie.title.toLowerCase().includes(nameSearch.trim().toLowerCase())
        )}
      />
      
    </div>
  );
}

export default App;
