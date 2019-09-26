import React from 'react';
import Movie from './Movie';
import getGallery from './Gallery-get';
import './App.css';

export default function Gallery() {
  return (
    <div className="gallery-container">

      {getGallery().map(movie => (
        <Movie
          key={movie.id}
          id={movie.id}
          name={movie.name}
          logo={movie.logo} />
      ))
      }

    </div>
  );
}