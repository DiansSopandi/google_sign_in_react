import { AUTH } from '../components/constants/actionTypes.js';
import * as api from '../api/index.js';

export const signin = ( dataLogin, history ) => async ( dispatch ) => {
    try {
        const { data } =  await api.signIn(dataLogin);

        dispatch({ type : AUTH, data }); // dispatch goto the reducer tipenya Auth dan payloadnya data 
        // log in the user
        // check user from BE
        // get user from the BE
        history.push('/');
    } catch (error) {
        console.log(error);
    }

}

export const signup = ( dataLogin, history ) => async ( dispatch ) => {
    try {
        const { data } =  await api.signUp(dataLogin);

        dispatch({ type : AUTH, data });

        history.push('/');
    } catch (error) {
        console.log(error);
    }

}