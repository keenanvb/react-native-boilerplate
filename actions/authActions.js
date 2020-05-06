
import { REGISTER_SUCCESS, REGISTER_FAIL, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOG_OUT, CLEAR_PROFILE } from './types';

//Login user
export const login = ({ email, password }, navigation) => {
    return async (dispatch) => {
        try {

            navigation.navigate('Home')
        } catch (err) {
            console.log('err', err);
            alert(err);
        }
    }
}

//user
export const getUser = (uid) => {
    return async (dispatch) => {
        try {
            // let user = await db.collection('users').doc(uid).get();

            // dispatch({
            //     type: LOGIN_SUCCESS,
            //     payload: user.data()
            // })


        } catch (err) {
            console.log('err', err);
            alert(err);
        }
    }
}

//Register user
export const register = ({ email, password }, navigation) => {
    return async (dispatch) => {
        try {



            navigation.navigate('Home')
            // dispatch({
            //     type: REGISTER_SUCCESS,
            //     payload: user
            // })


        } catch (err) {
            console.log('err', err);
            alert(err);
        }
    }
}

export const logout = (navigation) => {
    return (dispatch) => {

        dispatch({
            type: CLEAR_PROFILE
        })
        dispatch({
            type: LOG_OUT
        })
        navigation.navigate('Auth');
    }
}

