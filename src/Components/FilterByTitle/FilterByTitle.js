import React, { useState } from 'react'
import './FilterByTitle.css'

const FilterByTitle = ({FilterMovie}) => {
  const [title, setTitle] = useState('')
    const getTitle = (e) =>{
      setTitle(e.target.value)
    }
    FilterMovie(title);
  return (
    <div>
        <input className='inputstyle' type="text" placeholder='search' onChange={getTitle} />
    </div>
  )
}

export default FilterByTitle