import React from 'react'
import MovieCard from '../components/pages/MovieCard/MovieCard'


const MovieList = () => {
    const style ={
        back:{
            display:"flex",
            justifyContent:"space-evenly"
        },
    }
    return (
        <div style={style.back} >
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
            <MovieCard/>
        </div>
    )
}

export default MovieList
