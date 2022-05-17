import './css/shoppingCart.css';
import { useSelector } from 'react-redux';
import Footer from './Footer';

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
                <div className='form-name' >
                    <h3 className='credit-header'>Credit Card</h3>
                    <input type="text" placeholder='First name' className='firstname'  />
                    
                    <input type="text" placeholder='Last name' className='lastname'/>
                </div>

                <div className='form-cardnumber'>
                    <input type="text" placeholder='xxxx xxxx xxxx xxxx' className='cardnumber'  />
                </div>
                <div className='form-cvc'>
                    <input type="month" className='month' />
                    <input type="number" placeholder='cvc' className='cvc' />
                </div>

                <button className='pay-button'>Pay</button>

            </section>

            <Footer />
        </div>
    )
}



export default ShoppingCart;