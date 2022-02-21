import { CREATE, UPDATE, DELETE, FETCH_ALL, LIKE } from '../components/constants/actionTypes';

export default ( posts = [], action ) => {
    switch(action.type) {
        case CREATE : 
            return [ ...posts, action.payload];
        case UPDATE :
            return posts.map( (post)=> (post._id === action.payload._id ? action.payload : action.payload._id) );
        case DELETE :
            return posts.filter( (post) => (post._id !== action.payload) );
        case FETCH_ALL :
            return action.payload;
        case LIKE :
            return posts.map( (post) => (post._id === action.payload._id ? action.payload : action.payload._id) );
        default :
            return posts;
    }
};