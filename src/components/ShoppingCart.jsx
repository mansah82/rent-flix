import './css/shoppingCart.css';
import { useSelector } from 'react-redux';
import Footer from './Footer';

const ShoppingCart = () => {
    const movie = useSelector(state => state.movieList.rentedMovies);
    let listOfRentedMovies = null;

    let price = movie.map(movie => {
        if (movie.vote_average >= 8) {
            return 49
        } else if (movie.vote_average >= 7) {
            return 39
        } else if (movie.vote_average >= 6) {
            return 29
        } else {
            return 19
        }
    });

    var sum = price.reduce((x, y) => x + y);
    console.log("SUM", sum);

    switch (movie.length > 0) {
        case false: {
            listOfRentedMovies = 'No current movies'
            break
        }

        case true: {
            console.log('Showing movies...');
            listOfRentedMovies = movie.map((movie, index) => (
                <li key={movie.id} className="rentedMovie">
                    <p className='rentTitle'>{movie.title}</p>
                    <p className='rentPrice'>{price[index]}</p>
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
                {movie.length > 0 ? <p id='rentTotal'>Total: {sum} Kr</p> : null}
            </section>

            <section id='creditForm'>
                Credit form here
            </section>

            <Footer />
        </div>
    )
}

export default ShoppingCart;