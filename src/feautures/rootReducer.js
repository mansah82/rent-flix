import { combineReducers } from "redux";
import { reducer as moveListReducer } from "./movieList";


const rootReducer = combineReducers({
    movieList: moveListReducer,
})

export { rootReducer }