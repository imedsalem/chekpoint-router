import React from 'react'
import './MovieCard.css'

const MovieCard = ({id,title,urlImage,desc,date,duration,genres,actors,rating}) => {

  return (
    <div className='conatinerMovieCard'>
      <img src={urlImage} alt={`${title}`} className='img' />
      <div className="info">
      <p className='title'>{title}</p>
      <p className='rating'>{rating}</p>
      </div>
    </div>
  )
}

export default MovieCard