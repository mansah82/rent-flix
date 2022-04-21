import './css/homePage.css';
import { Link } from 'react-router-dom';


const HomePage = () => {


    return(
        <Link to={"/info"}>
       <div className='row' >
           <div className='column' >
                <h2>Column 1</h2>
                <p>Helloooo</p>
            </div>
           <div className='column'>
               <h2>Column 1</h2>
                <p>Helloooo</p>
           </div>
           <div className='column'>
             
               <h2>Column 1</h2>
                <p>Helloooo</p>
           </div>
           <div className='column'>
               <h2>Column 1</h2>
                <p>wgajoejfioerjf</p>
           </div>
           <div className='column'>
               <h2>Column 1</h2>
                <p>Helloooo</p>
           </div>
           <div className='column'>
               <h2>Column 1</h2>
                <p>Helloooo</p>
           </div>
           <div className='column'>
               <h2>Column 1</h2>
                <p>Helloooo</p>
           </div>
           <div className='column'>
               <h2>Column 1</h2>
                <p>Helloooo</p>
           </div>
           <div className='column'>
               <h2>Column 1</h2>
                <p>Helloooo</p>
           </div>
           
           <div className='column'>
               <h2>Column 1</h2>
                <p>Helloooo</p>
           </div>


       </div>
       </Link>

    )
}


export default HomePage;