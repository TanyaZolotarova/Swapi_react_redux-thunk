export const FETCH_DATA_REQUEST = 'FETCH_DATA_REQUEST';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';
export const CLEAR_DATA = 'CLEAR_DATA';

export const fetchDataRequest = () => ({
    type: FETCH_DATA_REQUEST,
});

export const fetchDataSuccess = (data) => ({
    type: FETCH_DATA_SUCCESS,
    payload: data,
});

export const fetchDataFailure = (error) => ({
    type: FETCH_DATA_FAILURE,
    payload: error,
});

export const clearData = () => ({
    type: CLEAR_DATA,
});

export function fetchSwapiData(query) {
    return async (dispatch) => {
        dispatch(fetchDataRequest());
        try {
            const response = await fetch(`https://swapi.dev/api/${query}`);
            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }
            const data = await response.json();
            dispatch(fetchDataSuccess(data));
        } catch (error) {
            dispatch(fetchDataFailure(error.message));
        }
    };
}