import React, { useState } from 'react'
import './AddItem.css'
import { v4 as uuidv4 } from 'uuid';

const AddItem = ({AddMovie}) => {
    const [chnageStyle, setChnageStyle] = useState(true)
    const onClickAdd =()=>{
        setChnageStyle(!chnageStyle)
    }
    const [title, setTitle] = useState('')
    const getTitle = (e) => {
        setTitle(e.target.value)
    }
    const [Desc, setDesc] = useState('')
    const getDesc = (e) => {
        setDesc(e.target.value)
    }
    const [Data, SetData] = useState('')
    const getData = (e) => {
        SetData(e.target.value)
    }
    const [duration, setDuration] = useState('')
    const getDuration = (e) => {
        setDuration(e.target.value)
    }
    const [rating, setRating] = useState('')
    const getRating = (e) => {
        setRating(e.target.value)
    }
    const [image, setImage] = useState('')
    const getImage = (e) => {
        setImage(e.target.value)
    }
    const handleClick = ()=>{
        AddMovie({id:uuidv4(), title:title,Desc:Desc,Data:Data,duration:duration,rating:rating,urlImage:image});
        setChnageStyle(!chnageStyle)
    }
  return (
    <div>
        <button className='btnstyle' onClick={onClickAdd}>Add New Movie</button>
            <div className='ConatinerAdd' style={{ display: chnageStyle ? "none" : "block" }}>
                <div className="contentAdd">
                    <div> <span className="closer" onClick={onClickAdd}>x</span></div>
                    <h3 style={{textAlign: 'center', color: 'red'}}>add new movie</h3>
                    <div className="InputContentAdd">
                    <input  type="text" placeholder='title' onChange={getTitle}/>
                    <input type="text" placeholder='description' onChange={getDesc} />
                    <input type="text" placeholder='date' onChange={getData} />
                    <input type="text" placeholder='duration' onChange={getDuration} />
                    <input type="text" placeholder='rating' onChange={getRating} />
                    <input type="text" placeholder='image' onChange={getImage}/>
                    </div>
                    <button onClick={handleClick}>Add</button>
            </div>
        </div>
    </div>
  )
}

export default AddItem