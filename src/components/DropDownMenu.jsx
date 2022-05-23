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
    const [moviePage, setMoviePage] = useState(1);
    const [genreId, setGenreId] = useState(0);

    return (
        <div className='div-search'>
            <div id='nextPageContainer'>
                <button onClick={() => handleNextMovie("back")}>&lt;</button>
                <p>{moviePage}</p>
                <button onClick={() => handleNextMovie("forward")}>&gt;</button>
            </div>

            <section id='rightBarSection'>
                <form>
                    <div className='input-icons'>
                        <input className='input' id='inputText' type='text' placeholder='Search..' onInput={e => setInput(e.target.value)}
                            onChange={(e) => { handleSearch(e); setGenreName("Category"); }} />
                        <i className="fa fa-search icon" aria-hidden="true"></i>
                    </div>
                </form>

                <div className="dropMenu">
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                    <button className="dropButton"> {genreName} <i className="fa fa-caret-down"></i></button>

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
            </section>
        </div>
    )

    function handleClick(genre) {
        dispatch(actions.fetching());

        setGenreId(genre)
        setMoviePage(1)

        // Removing search bar text when choosing category
        document.getElementById("inputText").value = ""

        fetchMoviesList(genre, 1)
            .then((response) => {
                dispatch(actions.success(response));
            })
    }

    function handleSearch(e) {
        if (input == "") return
        setMoviePage(1)

        searchMovies(input)
            .then((response) => {
                dispatch(actions.success(response));
            })
    }

    function handleNextMovie(direction) {
        switch (direction) {
            case "back": {
                if (moviePage == 1) break

                fetchMoviesList(genreId, moviePage - 1)
                    .then((movies) => {
                        setMoviePage(moviePage - 1)
                        dispatch(actions.success(movies));
                    })
                break
            }

            case "forward": {
                fetchMoviesList(genreId, moviePage + 1)
                    .then((movies) => {
                        setMoviePage(moviePage + 1)
                        dispatch(actions.success(movies));
                    })
                break
            }

            default: break
        }

    }
}

export default DropDownMenu;