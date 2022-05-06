import './css/infoMovie.css';
import { useEffect } from 'react';


const InfoMoviePage = ({activeMovie}) => {


    
    let price = 0

    if (activeMovie.vote_average >= 8){
        price = 49
    } else if(activeMovie.vote_average >= 7){
        price = 39
    } else if(activeMovie.vote_average >= 6){
        price = 29
    } else {
        price = 19
    }

    const picturePath = "https://image.tmdb.org/t/p/w500/"

   

    return(
        <div className='container'>
            <div className='image'>
                <img className='poster' src={picturePath + activeMovie.poster_path}/>
            </div>
            <div className='text'>
                <h1>{activeMovie.title}</h1>
                <p>Release date: {activeMovie.release_date}</p>
                <h3>Rating: {activeMovie.vote_average}</h3>
                <hr color='red'></hr>
                <p>{activeMovie.overview}</p>
                <h2>Price: {price} Kr</h2>
                
            </div>
            
        </div>

    )
   

    
    
    
    
}



export default InfoMoviePage;