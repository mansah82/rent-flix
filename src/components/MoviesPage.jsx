import './css/moviePage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../feautures/movieList';
import { fetchMoviesList } from '../asyncOperations/apiFetch';
import DropDownMenu from './DropDownMenu';
import { useState } from 'react';

const MoviesPage = ({ setMovie }) => {
    const status = useSelector(state => state.movieList.status);
    const movie = useSelector(state => state.movieList.movie);
    const picturePath = "https://image.tmdb.org/t/p/w500/";

    const dispatch = useDispatch();
    let movieListContent = null;

    switch (status) {
        case 'fetching': {
            // Start loading here
            break
        }

        case 'success': {
            // Remove loading here

            movieListContent = movie.map((mov) => (
                <li className='movieCard' key={mov.id}>
                    <Link to={"/info"} onClick={() => setMovie(mov)}>
                        <img className='movieImage' src={picturePath + mov.poster_path} alt='Movie poster' />
                        <h3>{mov.title}</h3>
                    </Link>
                </li>
            ))
            break
        }

        default: break
    }

    useEffect(() => {
        if (movieListContent == null) {
            dispatch(actions.fetching());
        }

        fetchMoviesList()
            .then((movies) => {
                dispatch(actions.success(movies));
            })
    }, [])

    return (
        <div className='movies_page'>
            <div className='dropdown-div'>
                <DropDownMenu />
            </div>

            <section className='outerMovieContainer'>
                <h1 id='categoryTitle'></h1>
                <div id='movieContainer'>
                    {movieListContent}
                </div >
            </section>
        </div>
    )
}

export default MoviesPage;