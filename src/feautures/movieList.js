import { createAction, createReducer } from "@reduxjs/toolkit"

const fetching = createAction('fetching');
const success = createAction('success');
const failure = createAction('failure');

const actions = { fetching, success, failure };

const STATUS = {
    NORMAL: 'normal',
    FETCHING: 'fetching',
    SUCCESS: 'success',
    FAILURE: 'failure'
}

const initialState = {
    status: STATUS.NORMAL,
    movie : null
}

const reducer = createReducer(initialState, {
    [fetching] : (state, action) => ({
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