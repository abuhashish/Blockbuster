import React from 'react';
import '../../App.css';
import LatestMovieList from './LatestMovieList';
const NowShowing = () => {
  return(
    <div className='nowshowing'>
        <h1 >Now Showing</h1> 
        <LatestMovieList/>
    </div>
)
}

export default NowShowing


