import {
    REQUEST_ROBOTS_ERROR,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
} from './actionTypes';

const initialState = {
    data: [],
    pending: false,
    error: false,
};

export const requestRobotsReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                pending: true,
            };
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                pending: false,
                data: action.payload,
            };
        case REQUEST_ROBOTS_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};
