import { createAction, createReducer } from "@reduxjs/toolkit"

const fetching = createAction('fetching');
const success = createAction('success');
const failure = createAction('failure');
const rentMovie = createAction('rentMovie')

const actions = { fetching, success, failure, rentMovie };

const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'fetching',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

const initialState = {
    status: STATUS.NORMAL,
    movie: null,
    rentedMovies: []
}

const reducer = createReducer(initialState, {
    [fetching]: (state, action) => ({
        ...state,
        status: STATUS.FETCHING
    }),
    [success]: (state, action) => ({
        ...state,
        status: STATUS.SUCCESS,
        movie: action.payload
    }),

    [failure]: (state, action) => ({
        ...state,
        status: STATUS.FAILURE
    }),

    [rentMovie]: (state, action) => ({
        ...state,
        rentedMovies: [...state.rentedMovies, ...action.payload]
    })
})

export { actions, STATUS, reducer }