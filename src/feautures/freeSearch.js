import { createAction, createReducer } from "@reduxjs/toolkit"

const isFetching = createAction('is fetching1');
const success = createAction('success1');
const failure = createAction('failure1');

const actions = { isFetching, success, failure };


const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'is fetching',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

const initialState = {
    status: STATUS.NORMAL,
    movie : null
}

const reducer = createReducer(initialState, {
    
    [isFetching] : (state, action) => ({
        ...state,
        status: STATUS.FETCHING
    }),
    [success] : (state, action) => ({
        status: STATUS.SUCCESS,
        movie :  action.payload
    }),

    [failure] : (state, action) => ({
        ...state,
        status: STATUS.FAILURE
    })

})

export { actions , STATUS, reducer }