import './App.css';
import { useEffect, useState } from 'react';

import MovieCard from './MovieCard.js';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=6222fe99';

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState();

  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
    console.log(data.Search);
  }

  useEffect(() => {
    searchMovie('green');
  }, []);

  // console.log('the sizeof array of movies: ', movies.length);

  return (
    <div className='app'>
      <h1 className='app-logo__title'>Jali Movie</h1>

      <div className='search'>
        <input
          placeholder='Search for movies ...'
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
          // onKeyUp={() => {searchMovie(searchTerm)}}
        />
        <img
          src='./icons8-search.svg'
          alt='search'
          onClick={() => {searchMovie(searchTerm)}} 
        />
      </div>
    
      {/* {console.log(movies.length)} */}
      {
        movies.length > 0
          ? (
            <div className='container'>
              {
                movies.map((movie) => 
                  {return <MovieCard m={movie}/>}
                )
              }
            </div>
          ) : (
            <div>
              <h4>NO MOVIE FOUND</h4>
            </div>
          )
      }
    </div>
  );
}

export default App;
