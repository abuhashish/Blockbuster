import React from 'react';
import '../../App.css';
import MovieList from '../MovieList'
import MoviePhoto from './MoviePhoto/MoviePhoto'
export default function Home() {
  return (
    <div  className='home'>
      <MoviePhoto/>
      <MovieList/> 
    </div>
  );
}
