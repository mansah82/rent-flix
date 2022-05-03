import './css/homePage.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, STATUS } from '../feautures/popularMovies';

const HomePage = ({setMovie}) => {

    const status = useSelector(state => state.popularMovies.status);
    const movie = useSelector(state => state.popularMovies.movie);

    const picturePath = "https://image.tmdb.org/t/p/w500/"


    const dispatch = useDispatch();
    let popularContent = null;

    if (status === STATUS.NORMAL) {

        popularContent = 'Ready for movies'

    } else if (status === STATUS.FETCHING) {

        popularContent = 'fetching movies'

    } else if (status === STATUS.SUCCESS) {

        popularContent = movie.map((mov) => (
            
            <div key={mov.id} className="column" onClick={() => setMovie(mov)}>
                <div className='row'>
                <img className='movie-poster' src = {picturePath + mov.poster_path}   />
                <p className='movie-title'>{mov.title}</p>
                </div>
            </div>
        ))
    } else {

        popularContent = 'Movies unanvalible'
    }

    useEffect(()=>{
        fetchPopularMovies(dispatch);
    }, [])

 
    return(
        <Link to={"/info"}>   
        <div className="row">
            {popularContent}
        </div>
       </Link>

    )
}

async function fetchPopularMovies(dispatch) {
    
    dispatch(actions.isFetching());
    
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
};


export default HomePage;