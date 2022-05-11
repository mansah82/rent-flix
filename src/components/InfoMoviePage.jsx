import './css/infoMovie.css';
import { useDispatch } from 'react-redux';
import { actions } from '../feautures/movieList';
import { BsFillCartCheckFill } from 'react-icons/bs';

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
        <div id='infoMoviePage'>
            <section id='infoMovieContainer'>
                <p>{activeMovie.vote_average}</p>
                <img src={picturePath + activeMovie.poster_path} />
            </section>

            <section id='infoMovieText'>
                <h1>{activeMovie.title}</h1>
                <h2>{activeMovie.release_date}</h2>
                <h3>Votes: {activeMovie.vote_count}</h3>
                <hr />
                <p>{activeMovie.overview} </p>

                <button onClick={() => handleBuy(activeMovie)} id='rentButton'><BsFillCartCheckFill />Add to cart</button>
                <hr />

                <div>
                    <p>Comment section component here</p>
                </div>
            </section>
        </div>
    )

    function handleBuy(movieInfo) {
        // Todo:
        // Check if item already exist in rentedMovies, if false, then just add item
        dispatch(actions.rentMovie([movieInfo]))
    }
}

export default InfoMoviePage;