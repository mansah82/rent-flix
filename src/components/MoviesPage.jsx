import './css/moviePage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../feautures/movieList';
import fetchMoviesList from '../asyncOperations/apiFetch';
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
                return dispatch(actions.success(movies));
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

async function fetchFreeSearch(dispatch, input) {

    dispatch(actions.fetching());
    if (input !== "") {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=ace7b669ec91ad7702878aa98fd99d60&language=en-US&query=${input}&page=1&include_adult=false`
        try {
            let respone = await fetch(url);
            let data = await respone.json();

            console.log('got data', data)

            let movie = data.results;
            dispatch(actions.success(movie));
            console.log('results', movie)

        } catch {

            dispatch(actions.failure());

        }

    } else {
        const url = 'https://api.themoviedb.org/3/movie/popular?api_key=ace7b669ec91ad7702878aa98fd99d60&language=en-US&page=1'
        try {
            let respone = await fetch(url);
            let data = await respone.json();

            console.log('got data', data)

            let movie = data.results;
            dispatch(actions.success(movie));
            console.log('results', movie)

        } catch {

            dispatch(actions.failure());

        }
    }
};

async function genresFetching(dispatch, genre) {

    dispatch(actions.fetching());

    let url = `https://api.themoviedb.org/3/discover/movie?api_key=ace7b669ec91ad7702878aa98fd99d60&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genre}&with_watch_monetization_types=flatrate`

    try {
        let respone = await fetch(url);
        let data = await respone.json();

        console.log('got data', data)

        let genres = data.results;
        dispatch(actions.success(genres));
        console.log('genres', genres)

    } catch {

        dispatch(actions.failure());

    }
};

export { genresFetching };

export { fetchFreeSearch };

export default MoviesPage;