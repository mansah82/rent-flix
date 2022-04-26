import './css/moviePage.css';
import DropDownMenu from './DropDownMenu';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions, STATUS } from '../feautures/freeSearch';


const MoviesPage = () => {

    const status = useSelector(state => state.freeSearch.status);
    const movie = useSelector(state => state.freeSearch.movie);

    const picturePath = "https://image.tmdb.org/t/p/w500/"


    const dispatch = useDispatch();

    let freeSearchContent = null;

    if (status === STATUS.NORMAL) {

        freeSearchContent = 'Ready for movies'

    } else if (status === STATUS.FETCHING) {

        freeSearchContent = 'fetching movies'

    } else if (status === STATUS.SUCCESS) {

        freeSearchContent = movie.map((mov) => (
            
            <div key={mov.id} className="column">
                <div className='row'>
                <img className='movie-poster' src = {picturePath + mov.poster_path}   />
                <p className='movie-title'>{mov.title}</p>
                </div>
            </div>
        ))
    } else {

        freeSearchContent = 'Movies unanvalible'
    }

    return (

        <div>
            <div>
                <DropDownMenu />
            </div>
           

            <div className="row">
            {freeSearchContent}
        </div>

        </div>

    )
}

async function fetchFreeSearch(dispatch, input) {
    
    dispatch(actions.isFetching());

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
};

export { fetchFreeSearch };

export default MoviesPage;