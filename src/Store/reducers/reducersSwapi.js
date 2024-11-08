import {FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, CLEAR_DATA} from '../actions/actionsSwapi';

const initialState = {
    data: null,
    loading: false,
    error: null,
};

export function swapiReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_DATA_REQUEST:
            return {...state, loading: true, error: null};
        case FETCH_DATA_SUCCESS:
            return {...state, loading: false, data: action.payload};
        case FETCH_DATA_FAILURE:
            return {...state, loading: false, error: action.payload};
        case CLEAR_DATA:
            return {...state, data: null, error: null};
        default:
            return state;
    }
}


