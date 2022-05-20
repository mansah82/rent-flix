

// GET Api for fetching movies
async function fetchMoviesList(category) {
    const categoryApi = `https://api.themoviedb.org/3/discover/movie?api_key=ace7b669ec91ad7702878aa98fd99d60&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${category}&with_watch_monetization_types=flatrate`
    const popularApi = 'https://api.themoviedb.org/3/movie/popular?api_key=ace7b669ec91ad7702878aa98fd99d60&language=en-US&page=1'

    try {
        // undefined == popular movies
        let api = category ? categoryApi : popularApi;

        let response = await fetch(api);
        let data = await response.json();
        if (response.ok) return data.results;

    } catch (error) {
        console.log(error);
    }
}

async function searchMovies(name) {
    let api = `https://api.themoviedb.org/3/search/movie?api_key=ace7b669ec91ad7702878aa98fd99d60&language=en-US&query=${name}&page=1&include_adult=false`

    try {
        let response = await fetch(api);
        let data = await response.json();
        if (response.ok) return data.results;
       
       
    } catch (error) {
        console.log(error);
    }
}

async function getTrailer(id) {
    let api = `https://api.themoviedb.org/3/movie/${id}?api_key=ace7b669ec91ad7702878aa98fd99d60&append_to_response=videos`
     console.log("getTrailer", id)
    try {
        let response = await fetch(api);
        console.log("trailer",response)
        let data = await response.json();
        if (response.ok) return data;
       
    } catch (error) {
        console.log(error);
    }
    
}

export {
    fetchMoviesList,
    searchMovies,
    getTrailer
}

// Sleep code ?
// await new Promise(resolve => setTimeout(resolve, 3000))