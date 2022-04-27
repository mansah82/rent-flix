import { Component } from 'react';
import { useDispatch } from 'react-redux';
import './css/dropDownMenu.css'
import { fetchFreeSearch } from './MoviesPage';
import { useState } from 'react';
import { genresFetching } from './MoviesPage';




const DropDownMenu = () => {

    const [input, setInput] = useState("");
 
    let genre = ""

    const dispatch = useDispatch();

    return (
        <div className='div-search'>
             <div>
             <input className="input" type="text" onInput={e => setInput(e.target.value)} 
             onChange={() => fetchFreeSearch(dispatch, input)} placeholder="Search..." />
        </div>
      
        <div className="dropMenu">
            

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <button className="dropButton">Category  <i style={{ marginLeft: '2rem' }} className="fa fa-caret-down"></i></button>

            <div className="dropContent">
                <p onClick={() => genresFetching(dispatch, genre=27)}>Horror</p>
                <p onClick={() => genresFetching(dispatch, genre=28)}>Action</p>
                <p onClick={() => genresFetching(dispatch, genre=12)}>Adventure</p>
                <p onClick={() => genresFetching(dispatch, genre=16)}>Animation</p>
                <p onClick={() => genresFetching(dispatch, genre=35)}>Comedy</p>
                <p onClick={() => genresFetching(dispatch, genre=10751)}>Family</p>
                <p onClick={() => genresFetching(dispatch, genre=80)}>Crime</p>
                <p onClick={() => genresFetching(dispatch, genre=10749)}>Romance</p>
                <p onClick={() => genresFetching(dispatch, genre=10752)}>War</p>
                <p onClick={() => genresFetching(dispatch, genre=878)}>S.F</p>
            </div>
        </div>

        </div>
       
    )

}

export default DropDownMenu;
