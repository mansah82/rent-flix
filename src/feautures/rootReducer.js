import { combineReducers } from "redux";
import { reducer as popularMoviesReducer } from "./popularMovies";


const rootReducer = combineReducers({

    popularMovies : popularMoviesReducer

})

export { rootReducer }