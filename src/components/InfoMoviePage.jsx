import './css/infoMovie.css';
import { useDispatch } from 'react-redux';
import { actions } from '../feautures/movieList';


const InfoMoviePage = ({ activeMovie }) => {
    const picturePath = "https://image.tmdb.org/t/p/w500/"
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
        <div className='container'>
            <div className='image'>
                <img className='poster' src={picturePath + activeMovie.poster_path} />
            </div>
            <div className='text'>
                <h1>{activeMovie.title}</h1>
                <p>Release date: {activeMovie.release_date}</p>
                <h3>Rating: {activeMovie.vote_average}</h3>
                <hr color='red'></hr>
                <p>{activeMovie.overview}</p>
                <h2>Price: {price} Kr</h2>

                <button onClick={() => handleBuy(activeMovie)} id='rentButton'>Add to cart</button>
            </div>
        </div>
    )

    function handleBuy(movieInfo) {
        // Todo:
        // Check if item already exist in rentedMovies, if false, then just add item
        dispatch(actions.rentMovie([movieInfo]))
    }
}

export default InfoMoviePage;