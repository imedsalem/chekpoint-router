import React ,{ useState } from 'react';
import MovieList from '../Components/MovieList/MovieList';
import AddItem from '../Components/Add/AddItem';
import FilterByTitle from '../Components/FilterByTitle/FilterByTitle';
import './Home.css'
import Filterbyrating from '../Components/Filterbyrating/Filterbyrating';

const Home = ({data}) => {
    const [moviedata, setMoviedata] = useState(data)
    const [filterx, setFilterx] = useState('')
    const [filterxratingmin, setFilterxratingmin] = useState(0)
    const [filterxratingmax, setFilterxratingmax] = useState(10)
    const AddMovie = (x) =>{
      setMoviedata([...moviedata,x]);
    }
    const FilterMovie = (x) =>{
        setFilterx(x)
    }
    const FilterMovieByRating = (x,y) =>{
      setFilterxratingmin(x)
      setFilterxratingmax(y)
    }
    
  return (
    <div>
        <h1 className='titleApp'>app movies</h1>
      <div className="control">
        <AddItem AddMovie={AddMovie}/>
        <FilterByTitle FilterMovie={FilterMovie}/>
        <Filterbyrating FilterMovieByRating={FilterMovieByRating} />
      </div>
      
      <MovieList data={moviedata.filter(el=>
        ((el.title.toLocaleLowerCase().includes(filterx.trim().toLocaleLowerCase())
        &&(el.rating>=filterxratingmin)
        &&(el.rating<=filterxratingmax))
        ))}/>

    </div>
  )
}

export default Home