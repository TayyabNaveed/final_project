import api from '../api';
import { userLoggedIn } from './loginauth';

export const signup = (cred) => dispatch => 
api.clients.signup(cred).then(loginUser => {
    
    localStorage.PicturesqueJWT = loginUser.token;
    dispatch(userLoggedIn(loginUser)); });


