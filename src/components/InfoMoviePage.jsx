import './css/infoMovie.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../feautures/movieList';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import CommentSection from './CommentSection';
import { useEffect } from 'react';
import { isEmpty } from '@firebase/util';

const InfoMoviePage = ({ activeMovie }) => {
    const picturePath = "https://image.tmdb.org/t/p/w500/"
    const movie = useSelector(state => state.movieList.rentedMovies);
    const dispatch = useDispatch();
    let price = 0

    if (activeMovie.vote_average >= 8) {
        price = 49
    } else if (activeMovie.vote_average >= 7) {
        price = 39
    } else if (activeMovie.vote_average >= 6) {
        price = 29
    } else {
        price = 19
    }

    return (
        <div id='infoMoviePage'>
            <section id='infoMovieContainer'>
                <p>{activeMovie.vote_average}</p>
                <img src={picturePath + activeMovie.poster_path} />
            </section>

            <section className='infoMovieText'>
                <BsFillArrowRightSquareFill id='backButton' onClick={() => handleBackButton()} />
                <h1>{activeMovie.title}</h1>
                <h2>{activeMovie.release_date}</h2>
                <h3>Votes: {activeMovie.vote_count}</h3>
                <hr />
                <p>{activeMovie.overview} </p>

                <button onClick={() => handleBuy(activeMovie)} id='rentButton'><BsFillCartCheckFill />{price}$ | Add to cart</button>
                <hr />

                <div>
                    <CommentSection selectedMovie={activeMovie} />
                </div>
            </section>
        </div>
    )

    function handleBuy(movieInfo) {
        let rentedFilms = [];

        movie.forEach(element => {
            rentedFilms.push(element.id)
        });

        // Checks if list is rent list is empty and if selectedMovie already exists in the list
        if (rentedFilms.length == 0) { return dispatch(actions.rentMovie([movieInfo])) }
        if (!rentedFilms.includes(movieInfo.id)) { dispatch(actions.rentMovie([movieInfo])) }
    }

    function handleBackButton() {
        window.history.back();
    }
}

export default InfoMoviePage;