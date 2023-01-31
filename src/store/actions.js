import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_ERROR,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
} from './actionTypes';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text,
});

export const requestRobots = async (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING });
    try {
        const robotsData = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        );
        const response = await robotsData.json();
        dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: response });
    } catch (error) {
        dispatch({ type: REQUEST_ROBOTS_ERROR, payload: error });
        console.error(error);
    }
};
