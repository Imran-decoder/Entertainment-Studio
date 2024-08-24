import React, { useState } from 'react';
import SearchBar from './searchBar';
import Genre from './genre';
import MovieCard from './movieCard';
import '../components/responsive.css';

const Movie = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);

  const handleFetchGenres = (fetchedGenres) => {
    setGenres(fetchedGenres);
    setIsLoading(false);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre); 
    console.log(`${genre} genre clicked`);
  };

  const movies = {
    Action: [
      { title: "Black Panther: Wakanda Forever", imageUrl: "path_to_your_image1", rating: "7.3" },
      { title: "Shazam! Fury of the Gods", imageUrl: "path_to_your_image2", rating: "7.0" },
    ],
    Horror: [
      { title: "Sayen", imageUrl: "path_to_your_image3", rating: "6.4" },
      { title: "Shark Side of the Moon", imageUrl: "path_to_your_image4", rating: "5.3" },
    ],
    // Add more genres and movies as needed
  };

  return (
    <div className="w-full h-auto flex flex-col justify-center items-center mt-2">
      <div className="mt-2 top-20 w-full flex items-center justify-center space-x-4">
        <SearchBar />
        <Genre onFetchGenres={handleFetchGenres} setIsLoading={setIsLoading} />
      </div>
      <div className="mt-4 w-full flex flex-col items-center">
        {isLoading && <p>Loading genres...</p>}
        {genres.length > 0 && (
          <div className="flex flex-wrap justify-center">
            {genres.map((genre, index) => (
              <button
                key={index}
                className={`p-2 px-6 m-2 rounded-3xl outline-none font-semibold
                ${selectedGenre === genre ? 'bg-white text-black' : 'bg-slate-400 hover:bg-gray-300 text-black'}`}
                onClick={() => handleGenreClick(genre)}
              >
                {genre}
              </button>
            ))}
          </div>
        )}
      </div>

      <div className="w-full flex flex-wrap justify-center mt-6 mx-4">
        {selectedGenre && movies[selectedGenre] && movies[selectedGenre].map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            imageUrl={movie.imageUrl}
            rating={movie.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default Movie;
