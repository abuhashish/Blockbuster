import React from 'react'
import MovieCaputre from '../../components/pages/MovieCard/MovieCaputre'
const LatestMovieList = () => {
    const style ={
        back:{ 
            itemAlign:"center",
        },
        movieslide:{
            width:"5cm",
            margin:"0px"
        }
    }
    return (
        <div style={style.back} >
            <MovieCaputre />
            <MovieCaputre />
            <MovieCaputre />
            <MovieCaputre />
        </div>
    )
}

export default LatestMovieList
