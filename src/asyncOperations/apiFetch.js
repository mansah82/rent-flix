

// GET Api for fetching movies
async function fetchMoviesList(category) {
    const apiURL = 'https://api.themoviedb.org/3/movie/popular?api_key=ace7b669ec91ad7702878aa98fd99d60&language=en-US&page=1'

    // undefined == popular movies
    if (category == undefined) {

        try {
            let response = await fetch(apiURL);
            let data = await response.json();
            if (response.ok) return data.results;

        } catch (error) {
            console.log(error);
        }
    } else {
        console.log('Did not ask for popular movies!');
    }
}

export default fetchMoviesList;

// await new Promise(resolve => setTimeout(resolve, 3000))