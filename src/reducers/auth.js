import { AUTH,LOGOUT } from '../components/constants/actionTypes';

const authReducer = (state = { dataLogin: null }, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ...action?.data }) );
            // console.log(action?.data);
            return { ...state, dataLogin: action?.data };
        case LOGOUT:
            localStorage.clear();
            return { ...state, dataLogin: null };    
        default:
            return state;
    }
}

export default authReducer;