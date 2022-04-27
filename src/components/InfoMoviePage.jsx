import './css/infoMovie.css';


const InfoMoviePage = ({activeMovie}) => {

    const picturePath = "https://image.tmdb.org/t/p/w500/"

    return(
        <div className='container'>
            <div className='image'>
                <img className='poster' src={picturePath + activeMovie.poster_path}/>
            </div>
            <div className='text'>
                <h1>{activeMovie.title}</h1>
                <p>Release date: {activeMovie.release_date}</p>
                <p>{activeMovie.overview}</p>
                <h3>Rating: {activeMovie.vote_average}</h3>
            </div>
            
        </div>

    )
}

export default InfoMoviePage;