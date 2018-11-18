import {USER_LOGGED_IN, USER_LOGGED_OUT} from './types';
import api from '../api';


export const userLoggedIn = loginUser => ({

    type: USER_LOGGED_IN,
    loginUser

});

export const userLoggedOut = ()=> ({

    type: USER_LOGGED_OUT

});

export const login = (cred) => (dispatch) => 

api.clients.login(cred).then (loginUser => {
    
    localStorage.PicturesqueJWT = loginUser.token;
    dispatch(userLoggedIn(loginUser));
});

export const logout = () => (dispatch) => {
    

    localStorage.removeItem('PicturesqueJWT');
    localStorage.removeItem('PicturesqueAdmin');
    localStorage.removeItem('PicturesquePhotographer');
    dispatch(userLoggedOut());
};
export const confirm = (token) => (dispatch) => 

    api.clients.confirm(token).then(loginUser =>{
        localStorage.PicturesqueJWT = loginUser.token;
        dispatch(userLoggedIn(loginUser));
    });

export const resetPasswordRequest = ({email}) => ()=>{ 

       return api.clients.resetPasswordRequest(email);
        
    };
export const validateToken = (token) => () => {

    return api.clients.validateToken(token);

};
export const resetPassword = (data) => ()=> {

    return api.clients.resetPassword(data);

};
//Photographer Actions

export const photologin = (cred) => (dispatch ) => 
    api.photographers.login(cred).then(loginUser =>{ 
    localStorage.PicturesquePhotographer = loginUser.token;
    dispatch(userLoggedIn(loginUser))});

//Admin Auth actions


export const adminlogin = (cred) => (dispatch ) => 
    api.admin.login(cred).then(loginUser =>{ 
    localStorage.PicturesqueAdmin = loginUser.token;
    dispatch(userLoggedIn(loginUser))});
