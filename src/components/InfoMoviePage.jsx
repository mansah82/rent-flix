import './css/infoMovie.css';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../feautures/movieList';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { BsFillArrowRightSquareFill } from 'react-icons/bs';
import CommentSection from './CommentSection';
import { getTrailer } from '../asyncOperations/apiFetch';
import { useEffect } from 'react';
import { useState } from 'react';
import YouTube from 'react-youtube';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isEmpty } from '@firebase/util';


const InfoMoviePage = ({ activeMovie }) => {
    const picturePath = "https://image.tmdb.org/t/p/w500/"
    const movie = useSelector(state => state.movieList.rentedMovies);
    const dispatch = useDispatch();
    const [id, setId] = useState(activeMovie.id)
    const [currentMovie, setCurrentMovie] = useState([])
    const [playerTrailer, setPlayerTrailer] = useState(false)
    const [play, setPlay] = useState("Play trailer")

    useEffect(() => {
        setId(activeMovie.id)
        getTrailer(id)
            .then((response) => {
                console.log("GET TRAILER 2", response)
                setCurrentMovie(response)
                console.log("currentMOvie", currentMovie)
            })

        console.log("MOVIE ID", activeMovie.id)

    }, []);

    const renderTrailer = () => {
        const trailer = currentMovie.videos.results.find(vid => vid.name === "Official Trailer")
        console.log("renderTrailer", trailer)
        if (trailer == undefined) return
        const key = trailer ? trailer.key : currentMovie.videos.results[0].key
        return (
            <div id="trailer">
                <YouTube
                    containerClassName='youtube'
                    videoId={key}
                    opts={{
                        width: "60%",
                        height: "390px",
                        playerVars: {
                            autoplay: 1
                        }
                    }
                    }
                />
            </div>
        )
    }

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

            {currentMovie.videos && playerTrailer ? renderTrailer() : null}

            <section id='infoMovieContainer'>
                <p>{activeMovie.vote_average}</p>
                <img src={picturePath + activeMovie.poster_path} />
            </section>

            <section className='infoMovieText'>
                <BsFillArrowRightSquareFill id='backButton' onClick={() => window.history.back()} />
                <h1>{activeMovie.title}</h1>
                <h2>{activeMovie.release_date}</h2>
                <h3>Votes: {activeMovie.vote_count}</h3>
                <hr />
                <p>{activeMovie.overview} </p>

                <button onClick={() => handleBuy(activeMovie)
                } id='rentButton'><BsFillCartCheckFill />{price}$ | Add to cart</button>
                <button onClick={() => togglePlayer()} id='rentButton'>{play}</button>
                <hr />

                <div>
                    <CommentSection selectedMovie={activeMovie} />
                </div>
            </section>
            <ToastContainer />
        </div>
    )

    function handleBuy(movieInfo) {
        let rentedFilms = [];

        // Fills rentedFilms list with redux information
        movie.forEach(element => { rentedFilms.push(element.id) });

        // Checks if list is empty and then add selected movie
        if (rentedFilms.length == 0) {

            toast.success('Movie added to cart', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return dispatch(actions.rentMovie([movieInfo]))
        }

        // Checks if rentedFilm list contains current movie
        if (!rentedFilms.includes(movieInfo.id)) {

            toast.success('Movie added to cart', {
                position: "bottom-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

            return dispatch(actions.rentMovie([movieInfo]))
        }

        // Else just display error and dont add movie to cart
        toast.error('Movie already in cart!', {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    function togglePlayer() {
        if (playerTrailer === false) {
            setPlayerTrailer(true)
            setPlay("Close Trailer")
        } else {
            setPlayerTrailer(false)
            setPlay("Play Trailer")
        }
    }
}

export default InfoMoviePage;