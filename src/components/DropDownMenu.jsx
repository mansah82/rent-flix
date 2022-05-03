import { Component } from 'react';
import { useDispatch } from 'react-redux';
import './css/dropDownMenu.css'
import { fetchFreeSearch } from './MoviesPage';
import { useState } from 'react';
import { genresFetching } from './MoviesPage';

const DropDownMenu = () => {

    const [input, setInput] = useState("");

    let genre = ""
    const [genreName, setGenreName] = useState("Category")

    const dispatch = useDispatch();

    return (
        <div className='div-search'>
            <form>
                <div className='input-icons'>
                    <input className="input" type="text" onInput={e => setInput(e.target.value)}
                        onChange={() => fetchFreeSearch(dispatch, input, setGenreName("Category"))} placeholder="Search..." />
                    <i className="fa fa-search icon" aria-hidden="true" ></i>
                </div>
            </form>

            <div className="dropMenu">


                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="dropButton">{genreName}  <i style={{ marginLeft: '2rem', color: 'black' }} className="fa fa-caret-down"></i></button>

                <div className="dropContent">
                    <p onClick={() => genresFetching(dispatch, genre = 27, setGenreName("Horror"))}>Horror</p>
                    <p onClick={() => genresFetching(dispatch, genre = 28, setGenreName("Action"))}>Action</p>
                    <p onClick={() => genresFetching(dispatch, genre = 12, setGenreName("Adventure"))}>Adventure</p>
                    <p onClick={() => genresFetching(dispatch, genre = 16, setGenreName("Animation"))}>Animation</p>
                    <p onClick={() => genresFetching(dispatch, genre = 35, setGenreName("Comedy"))}>Comedy</p>
                    <p onClick={() => genresFetching(dispatch, genre = 10751, setGenreName("Family"))}>Family</p>
                    <p onClick={() => genresFetching(dispatch, genre = 80, setGenreName("Crime"))}>Crime</p>
                    <p onClick={() => genresFetching(dispatch, genre = 10749, setGenreName("Romance"))}>Romance</p>
                    <p onClick={() => genresFetching(dispatch, genre = 10752, setGenreName("War"))}>War</p>
                    <p onClick={() => genresFetching(dispatch, genre = 878, setGenreName("Sci-Fi"))}>Sci-Fi</p>
                </div>
            </div>

        </div>

    )

}

export default DropDownMenu;
