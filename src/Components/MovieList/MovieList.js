import React from 'react'
import { Link } from 'react-router-dom'
import MovieCard from '../MovieCard/MovieCard'
import './MovieList.css'

const MovieList = ({data}) => {
  ///${el.id}
  return (
    <div className='conatinerMovieList'>
        {data.map(el=> 
        <Link key={el.id} to={`/Details/${el.id}`} style={{textDecoration: 'none'}} > 
        <MovieCard id={el.id} title={el.title} urlImage={el.urlImage} desc={el.desc} date={el.date} duration={el.duration} rating={el.rating}/>
        </Link>
        )}
    </div>
  )
}

export default MovieList