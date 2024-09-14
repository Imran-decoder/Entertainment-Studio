import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

function MovieCard({ title, imageUrl, rating }) {
  const [isFavorited, setIsFavorited] = useState(false);

  const handleStarClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div className="bg-gray-900 p-4 m-4 rounded-lg shadow-lg" style={{ width: '200px' }}>
      <div className="relative w-full" style={{ paddingBottom: '100%' }}>
        <img
          src={imageUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="mt-4">
        <h3 className="text-white text-md font-semibold truncate">{title}</h3>
        <p className="text-gray-400 mt-1">Description goes here</p>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-400 font-bold">{rating}</span>
          <button
            onClick={handleStarClick}
            className={`p-2 rounded-full hover:bg-gray-700 ${isFavorited ? 'bg-transparent' : 'bg-gray-600'}`}
          >
            <FaStar color={isFavorited ? 'gold' : 'white'} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
