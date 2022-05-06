import './css/homePage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../feautures/movieList';
import fetchMoviesList from '../asyncOperations/apiFetch';
import Footer from './Footer';

const HomePage = ({ setMovie }) => {
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

            movieListContent = movie.map((data) => (
                <li className='movieCard' key={data.id}>
                    <Link to={"/info"} onClick={() => setMovie(data)}>
                        <img className='movieImage' src={picturePath + data.poster_path} alt='Movie poster' />
                        <h3>{data.title}</h3>
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
                return dispatch(actions.success(movies));
            })
    }, [])

    return (
        <div id='homePage'>
            <div className='welcome-text'>Choose between 1000+ Films
                <div className='welcome-text-line'>
                    For Your Movie Night!
                </div>
            </div>


            <h1 id='categoryTitle'>Popular</h1>
            <section id='movieContainer'>
                {movieListContent}
            </section >
            <Footer />
        </div >
    )
}

// async function fetchPopularMovies(dispatch) {
//     dispatch(actions.fetching());
//     const url = 'https://api.themoviedb.org/3/movie/popular?api_key=ace7b669ec91ad7702878aa98fd99d60&language=en-US&page=1'

//     try {
//         let respone = await fetch(url);
//         let data = await respone.json();
//         let movie = data.results;
//         console.log(movie);
//         dispatch(actions.success(movie));
//     } catch {
//         dispatch(actions.failure());
//     }
// };

export default HomePage;