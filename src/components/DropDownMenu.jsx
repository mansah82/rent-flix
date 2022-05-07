import './css/dropDownMenu.css';
import { useDispatch } from 'react-redux';
import { fetchFreeSearch } from './MoviesPage';
import { useState } from 'react';
import { genresFetching } from './MoviesPage';
import fetchMoviesList from '../asyncOperations/apiFetch';
import { actions } from '../feautures/movieList';

const DropDownMenu = () => {
    const [input, setInput] = useState("");
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
                <button className="dropButton"> Category  <i style={{ marginLeft: '2rem', color: 'black' }} className="fa fa-caret-down"></i></button>

                <div className="dropContent" onClick={(e) => {

                }}>
                    <p onClick={() => handleClick(27)}>Horror</p>
                    <p onClick={() => handleClick(28)}>Action</p>
                    <p onClick={() => handleClick(12)}>Adventure</p>
                    <p onClick={() => handleClick(16)}>Animation</p>
                    <p onClick={() => handleClick(35)}>Comedy</p>
                    <p onClick={() => handleClick(10751)}>Family</p>
                    <p onClick={() => handleClick(80)}>Crime</p>
                    <p onClick={() => handleClick(10749)}>Romance</p>
                    <p onClick={() => handleClick(10752)}>War</p>
                    <p onClick={() => handleClick(878)}>Sci-Fi</p>
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
}

export default DropDownMenu;