import React, { useState } from 'react';
import SearchBar from './searchBar';
import Genre from './genre';
import MovieCard from './movieCard';
import '../components/responsive.css';
import tempImg from '../assets/temperory.jpeg';

const Movie = () => {
  const [genres, setGenres] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleFetchGenres = (fetchedGenres) => {
    setGenres(fetchedGenres);
    setIsLoading(false);
  };

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
    setCurrentIndex(0);
    console.log(`${genre} genre clicked`);
  };

  const movies = {
    Action: [
      { title: "Black Panther: Wakanda Forever", imageUrl: tempImg, rating: "7.3" },
      { title: "Shazam! Fury of the Gods", imageUrl: tempImg, rating: "7.0" },
      { title: "Mad Max: Fury Road", imageUrl: tempImg, rating: "8.1" },
      { title: "Avengers: Endgame", imageUrl: tempImg, rating: "8.4" },
      { title: "The Dark Knight", imageUrl: tempImg, rating: "9.0" },
    ],
    Horror: [
      { title: "Sayen", imageUrl: tempImg, rating: "6.4" },
      { title: "Shark Side of the Moon", imageUrl: tempImg, rating: "5.3" },
    ],
  };

  const topSeriesMovies = [
    { title: "Stranger Things", imageUrl: tempImg, rating: "8.7" },
    { title: "The Witcher", imageUrl: tempImg, rating: "8.2" },
    { title: "Breaking Bad", imageUrl: tempImg, rating: "9.5" },
    { title: "The Crown", imageUrl: tempImg, rating: "8.6" },
    { title: "The Mandalorian", imageUrl: tempImg, rating: "8.8" },
    { title: "Loki", imageUrl: tempImg, rating: "8.3" },
    { title: "Squid Game", imageUrl: tempImg, rating: "8.1" },
  ];

  const tvSeriesMovies = [
    { title: "Friends", imageUrl: tempImg, rating: "8.9" },
    { title: "Game of Thrones", imageUrl: tempImg, rating: "9.3" },
    { title: "The Office", imageUrl: tempImg, rating: "8.9" },
  ];

  const animeMovies = [
    { title: "Naruto", imageUrl: tempImg, rating: "8.3" },
    { title: "Attack on Titan", imageUrl: tempImg, rating: "9.0" },
    { title: "One Piece", imageUrl: tempImg, rating: "8.8" },
  ];

  const otherMovies = [
    { title: "Inception", imageUrl: tempImg, rating: "8.8" },
    { title: "The Matrix", imageUrl: tempImg, rating: "8.7" },
    { title: "Interstellar", imageUrl: tempImg, rating: "8.6" },
  ];

  const visibleMovies = selectedGenre && movies[selectedGenre] ? movies[selectedGenre].slice(currentIndex, currentIndex + 3) : [];

  const canShowNext = selectedGenre && movies[selectedGenre] && movies[selectedGenre].length > currentIndex + 3;
  const canShowPrevious = currentIndex > 0;

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

      <div className="relative w-full flex flex-col items-center">
        <div className="flex flex-nowrap overflow-hidden mx-8">
          {visibleMovies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              className="mx-2"
            />
          ))}
        </div>

        {canShowPrevious && (
          <button
            onClick={() => setCurrentIndex(currentIndex - 3)}
            className="absolute left-0 p-2 bg-gray-600 rounded-full hover:bg-gray-700"
            style={{ zIndex: 10 }}
          >
            &#8592;
          </button>
        )}

        {canShowNext && (
          <button
            onClick={() => setCurrentIndex(currentIndex + 3)}
            className="absolute right-0 p-2 bg-gray-600 rounded-full hover:bg-gray-700"
            style={{ zIndex: 10 }}
          >
            &#8594;
          </button>
        )}
      </div>

      <div className='Card-container w-screen h-5/6 bg-gray-800 mt-10'>
        <div className='TopMovieWeek px-4 py-2 text-left text-white flex items-center'>
          <h2 className='mr-4 font-semibold'>Top Series Of The Week</h2>
          <div className='flex-grow border-t border-gray-600'></div>
        </div>
        <div className="flex flex-nowrap overflow-hidden mx-8">
          {topSeriesMovies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              className="mx-2"
            />
          ))}
        </div>

        <div className='TvSeries px-4 py-2 text-left text-white flex items-center'>
          <h2 className='mr-4 font-semibold'>TV Series</h2>
          <div className='flex-grow border-t border-gray-600'></div>
        </div>
        <div className="flex flex-nowrap overflow-hidden mx-8">
          {tvSeriesMovies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              className="mx-2"
            />
          ))}
        </div>

        <div className='Anime px-4 py-2 text-left text-white flex items-center'>
          <h2 className='mr-4 font-semibold'>Anime</h2>
          <div className='flex-grow border-t border-gray-600'></div>
        </div>
        <div className="flex flex-nowrap overflow-hidden mx-8">
          {animeMovies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              className="mx-2"
            />
          ))}
        </div>

        <div className='Other px-4 py-2 text-left text-white flex items-center'>
          <h2 className='mr-4 font-semibold'>Other</h2>
          <div className='flex-grow border-t border-gray-600'></div>
        </div>
        <div className="flex flex-nowrap overflow-hidden mx-8">
          {otherMovies.map((movie, index) => (
            <MovieCard
              key={index}
              title={movie.title}
              imageUrl={movie.imageUrl}
              rating={movie.rating}
              className="mx-2"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Movie;
