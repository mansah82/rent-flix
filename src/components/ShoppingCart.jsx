import './css/shoppingCart.css';
import { actions } from '../feautures/movieList';
import { useSelector } from 'react-redux';

const ShoppingCart = () => {
    const movie = useSelector(state => state.movieList.rentedMovies);
    let listOfRentedMovies = null;

    switch (movie.length > 0) {
        case false: {
            listOfRentedMovies = 'No current movies'
            break
        }

        case true: {
            console.log('Showing movies...');
            listOfRentedMovies = movie.map((data) => (
                <li key={data.id}>
                    <p>{data.title}</p>
                    <p>50kr</p>
                </li>
            ))
            break
        }

        default: break
    }

    return (
        <div id='rentedMoviesContainer'>
            {listOfRentedMovies}
        </div>
    )
}

export default ShoppingCart;