import './css/dropDownMenu.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { fetchMoviesList } from '../asyncOperations/apiFetch';
import { searchMovies } from '../asyncOperations/apiFetch';
import { actions } from '../feautures/movieList';

const DropDownMenu = () => {
    const [input, setInput] = useState("");
    const dispatch = useDispatch();
    const [genreName, setGenreName] = useState("Category")

    return (
        <div className='div-search'>
            <form>
                <div className='input-icons'>
                    <input className='input' type='text' placeholder='Search..' onInput={e => setInput(e.target.value)}
                        onChange={(e) => { handleSearch(e); setGenreName("Category"); }} />
                    <i className="fa fa-search icon" aria-hidden="true" ></i>
                </div>
            </form>

            <div className="dropMenu">
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                <button className="dropButton"> {genreName} <i style={{ marginLeft: '2rem', color: 'black' }} className="fa fa-caret-down"></i></button>

                <div className="dropContent">
                    <p onClick={() => {
                        handleClick(27);
                        setGenreName("Horror");
                    }}>Horror</p>
                    <p onClick={() => {
                        handleClick(28);
                        setGenreName("Action");
                    }}>Action</p>
                    <p onClick={() => {
                        handleClick(12);
                        setGenreName("Adventure");
                    }}>Adventure</p>
                    <p onClick={() => {
                        handleClick(16);
                        setGenreName("Animation");
                    }}>Animation</p>
                    <p onClick={() => {
                        handleClick(35);
                        setGenreName("Comedy");
                    }}>Comedy</p>
                    <p onClick={() => {
                        handleClick(10751);
                        setGenreName("Family");
                    }}>Family</p>
                    <p onClick={() => {
                        handleClick(80);
                        setGenreName("Crime");
                    }}>Crime</p>
                    <p onClick={() => {
                        handleClick(10749);
                        setGenreName("Romance");
                    }}>Romance</p>
                    <p onClick={() => {
                        handleClick(10752);
                        setGenreName("War");
                    }}>War</p>
                    <p onClick={() => {
                        handleClick(878); setGenreName("Sci-Fi");
                    }}>Sci-Fi</p>
                </div>
            </div>
        </div>
    )

    function handleClick(genre) {
        dispatch(actions.fetching());

        fetchMoviesList(genre)
            .then((response) => {
                dispatch(actions.success(response));

            })
    }

    function handleSearch(e) {
        if (input == "") return

        searchMovies(input)
            .then((response) => {
                dispatch(actions.success(response));
            })
    }
}

export default DropDownMenu;