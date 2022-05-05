import { NavLink } from 'react-router-dom';
import logo from '../Images/logo.png';
import './css/footer.css'

const Footer = () => {

    return (

        <footer className='footer'>
            <div className='footer-logo-div'>
                <img src={logo} className="footer-logo" />

            </div>

            <div className='newsletter'>

                <div>
                    <h3>Contact:</h3>
                    <p> Årstaängsvägen 9, 117 43 </p>
                    <p>Stockholm</p>
                    <p> Phone: 08-557 683 53 </p>
                    <p><a href="mailto:rent-flix@gmail.com">rent-flix@gmail.com</a></p>
                </div>
                <div>
                    <li>
                        <h3>MENU</h3>
                        <p>
                            <NavLink to="/movies" className={'footer-link'}>Movies</NavLink>
                        </p>
                        <p>About</p>
                        <p>About us</p>
                        <p>Careers</p>
                    </li>
                </div>
                <div>
                    <p>Sign up for our newsletter</p>
                    <input className='newsletter-input' type="text" placeholder='Your email here' />
                    <button className='sign-up'>SIGN UP</button>
                </div>


            </div>


            <div className='copywright'>

                &copy; {new Date().getFullYear()} Copywright: <a href="https://github.com/mansah82/rent-flix">Grup 3 ITHS GitHub</a> All rights reserved
            </div>



        </footer>
    )
}

export default Footer;