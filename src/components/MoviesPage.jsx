import './css/moviePage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../feautures/movieList';
import { fetchMoviesList } from '../asyncOperations/apiFetch';
import DropDownMenu from './DropDownMenu';

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
                <div key={mov.id} className="column" onClick={() => setMovie(mov)}>
                    <div className='row'>
                        <img className='movie-poster' src={picturePath + mov.poster_path} />
                        <p className='movie-title'>{mov.title}</p>
                    </div>
                </div>
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

            <Link to={"/info"}>

                <div className="row">

                    {movieListContent}

                </div>

            </Link>

        </div>
    )
}

export default MoviesPage;