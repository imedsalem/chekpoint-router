import React, { useState } from 'react'
import './Filterbyrating.css'

const Filterbyrating = ({FilterMovieByRating}) => {
  const [ratingmin, setRatingmin] = useState(0)
  const [ratingmax, setRatingmax] = useState(10)
    const getRatingmin = (e) =>{
      (e.target.value===''?setRatingmin(0):setRatingmin(e.target.value))
        //setRatingmin(e.target.value)
    }
    const getRatingmax = (e) =>{
      (e.target.value===''?setRatingmax(10):setRatingmax(e.target.value))
        //setRatingmax(e.target.value)
    }
    
    FilterMovieByRating(ratingmin,ratingmax);
  return (
    <div>
        min:<input className='inputstyle'type="number" id="tentacles" name="tentacles" min="0" max="10" onChange={getRatingmin} />
        max<input className='inputstyle'type="number" id="tentacles" name="tentacles" min="0" max="10" onChange={getRatingmax} />
    </div>
  )
}

export default Filterbyrating