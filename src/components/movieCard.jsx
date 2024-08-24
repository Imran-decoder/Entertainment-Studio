import React from 'react';
import { FaStar } from 'react-icons/fa';

function MovieCard({ title, imageUrl, rating }) {
  return (
    <div className="bg-gray-800 p-4 m-4 rounded-lg shadow-lg w-[200px]">
      <div className="relative">
        <img src={imageUrl} alt={title} className="rounded-lg w-full h-auto" />
        <button className="absolute top-2 right-2 text-white bg-gray-900 bg-opacity-50 rounded-full p-2 hover:bg-opacity-75">
          <FaStar />
        </button>
      </div>
      
      <div className="mt-4">
        <h3 className="text-white text-md font-semibold truncate">{title}</h3>
        <div className="flex justify-between items-center mt-2">
          <span className="text-green-400 font-bold">{rating}</span>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
