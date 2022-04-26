import { combineReducers } from "redux";
import { reducer as popularMoviesReducer } from "./popularMovies";
import { reducer as freeSearchReducer } from "./freeSearch";


const rootReducer = combineReducers({

    popularMovies : popularMoviesReducer,
    freeSearch : freeSearchReducer

})

export { rootReducer }