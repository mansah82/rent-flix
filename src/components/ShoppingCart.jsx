import './css/shoppingCart.css';
import { useSelector } from 'react-redux';
import Footer from './Footer';
import { FaCcVisa } from 'react-icons/fa';

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

    var sum = price.filter(x => x > 0)
        .reduce((x, y) => x + y, 0)
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
                <div className='form-name' >
                    <h3 className='credit-header'>Credit Card</h3>
                    <input type="text" placeholder='First name' className='firstname' id='firstname'  />
                    
                    <input type="text" placeholder='Last name' className='lastname' id='lastname'/>
                </div>

                <div className='form-cardnumber'>
                    <input type="text" placeholder='xxxx xxxx xxxx xxxx' className='cardnumber' id='cardnumber' />
                </div>
                <div className='form-cvc'>
                    <input type="month" className='month' id='month'/>
                    <input type="number" placeholder='cvc' className='cvc' id='cvc' />
                </div>

                <button className='pay-button' onClick={checkIfValid}>Pay</button>

            </section>

            <Footer />
        </div>
    )
function checkIfValid(){
    const firstName = document.getElementById("firstname")
    const lastName = document.getElementById("lastname")
    const cardNumber = document.getElementById("cardnumber")
    const cvc = document.getElementById("cvc")
    const month = document.getElementById("month")
    
    if(cardNumber.value.length != 16 &&
        firstName.value == "" &&
        lastName.value == "" &&
        cvc.value.length != 3) {

    
        cardNumber.style.background = "salmon"
        firstName.style.background = "salmon"
        lastName.style.background = "salmon"
        month.style.background = "salmon"
        cvc.style.background = "salmon"
    }
       

        
   
    
}


}



export default ShoppingCart;