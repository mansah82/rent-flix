import './css/shoppingCart.css';
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
            listOfRentedMovies = movie.map((movie) => (
                <li key={movie.id} className="rentedMovie">
                    <p className='rentTitle'>{movie.title}</p>
                    <p className='rentPrice'>50kr</p>
                </li>
            ))
            break
        }

        default: break
    }

    return (
        <div id='shoppingCartPage'>
            <section id='rentedMoviesContainer'>
                {listOfRentedMovies}
                {movie.length > 0 ? <p id='rentTotal'>Total: 99 Kr</p> : null}
            </section>

            <section id='creditForm'>
                Credit form here
            </section>
        </div>
    )
}

export default ShoppingCart;