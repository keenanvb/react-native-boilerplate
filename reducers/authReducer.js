import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOG_OUT,
    ACCOUNT_DELETE,
} from '../actions/types';

const INITIAL_STATE = {
    isAuthenticated: null,
    loading: true,
    user: null,
    token: null
};


export default (state = INITIAL_STATE, action) => {

    const { type, payload } = action;

    switch (type) {
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            // localStorage.setItem('token', payload.token)
            return { ...state, user: payload, isAuthenticated: true, loading: false }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOG_OUT:
        case ACCOUNT_DELETE:
            // localStorage.removeItem('token')
            return { ...state, token: null, isAuthenticated: false, loading: false, user: null }
        default:
            return state;
    }
}