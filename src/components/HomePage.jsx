import './css/homePage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, STATUS } from '../feautures/popularMovies';

const HomePage = ({ setMovie }) => {
    const status = useSelector(state => state.popularMovies.status);
    const movie = useSelector(state => state.popularMovies.movie);
    const picturePath = "https://image.tmdb.org/t/p/w500/";

    const dispatch = useDispatch();
    let popularContent = null;

    switch (status) {
        case 'is fetching': {
            // Loading image starts here
            break
        }

        case 'success': {
            // REMOVE loading image here
            popularContent = movie.map((data) => (
                <li className='movieCard' key={data.id}>
                    <Link to={"/info"} onClick={() => setMovie(data)}>
                        <img className='movieImage' src={picturePath + data.poster_path} />
                        <h3>{data.title}</h3>
                    </Link>
                </li>
            ))
            break
        }

        default:
            break
    }



    useEffect(() => {
        fetchPopularMovies(dispatch);
    }, [])


    return (
        <div id='homePage'>


            <h1 id='categoryTitle'>Popular</h1>
            <section id='movieContainer'>
                {popularContent}
            </section >
        </div >
    )
}

async function fetchPopularMovies(dispatch) {

    dispatch(actions.isFetching());

    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=ace7b669ec91ad7702878aa98fd99d60&language=en-US&page=1'

    try {
        let respone = await fetch(url);
        let data = await respone.json();
        let movie = data.results;

        dispatch(actions.success(movie));
    } catch {
        dispatch(actions.failure());
    }
};

export default HomePage;


   // if (status === STATUS.NORMAL) {

    //     popularContent = 'Ready for movies'
    // } else if (status === STATUS.FETCHING) {

    //     popularContent = 'fetching movies'
    // } else if (status === STATUS.SUCCESS) {

    //     popularContent = movie.map((mov) => (

    //         <div key={mov.id} className="column" onClick={() => setMovie(mov)}>
    //             <div className='row'>
    //                 <img className='movie-poster' src={picturePath + mov.poster_path} />
    //                 <p className='movie-title'>{mov.title}</p>
    //             </div>
    //         </div>
    //     ))
    // }

 // return (
    //     <Link to={"/info"}>
    //         <div className="row">
    //             {popularContent}
    //         </div>
    //     </Link>
    // );