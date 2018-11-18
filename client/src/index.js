import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './components/login';
import ForgotPassword from './components/forgotpassword';
import Signup from './components/signup';
import Categories from './components/categories';
import Adminlogin from './components/adminlogin';
import {Provider} from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route ,Switch} from 'react-router-dom'
import store from './store';
import { userLoggedIn } from './actions/loginauth';
import ClientRoute from './components/routes/ClientRoute';
import GuestRoute from './components/routes/GuestRoute';
import Photologin from './components/photologin';
import Clientdashboard from './components/clientdashboard';
import ConfirmationPage from './components/confirmationpage';
import ResetPasswordPage from './components/resetpasswordpage.js';
import decode from 'jwt-decode';
import PhotoDash from './components/photographerdashboard';
import AdminPanel from './components/adminpanel';

if(localStorage.PicturesqueJWT)
    {
        const payload= decode(localStorage.PicturesqueJWT);
        const loginUser = {token: localStorage.PicturesqueJWT, 
                            username: payload.username, 
                            confirmed:payload.confirmed, 
                            email:payload.email, bio: payload.bio,
                            city:payload.city };
        store.dispatch(userLoggedIn(loginUser));
    }
    if(localStorage.PicturesquePhotographer)
    {
        const payload= decode(localStorage.PicturesquePhotographer);
        const loginUser = {token: localStorage.PicturesquePhotographer, 
                            username: payload.username, 
                            confirmed:payload.confirmed, 
                            email:payload.email, bio: payload.bio,
                            city:payload.city, category: payload.category };
        store.dispatch(userLoggedIn(loginUser));
    }
    if(localStorage.PicturesqueAdmin){
        const payload= decode(localStorage.PicturesqueAdmin);
        const loginUser = {token: localStorage.PicturesqueAdmin,               
                        username: payload.username, 
                            };
        store.dispatch(userLoggedIn(loginUser));
    }
    
    
ReactDOM.render(

<Provider store={store}>
<BrowserRouter>

    <div className="maindiv">
    <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path= '/confirmation/:token' component={ConfirmationPage}/>
    <Route path='/signup' component ={Signup}/>
    <GuestRoute path= '/reset_password/:token' component={ResetPasswordPage}/>
    <GuestRoute path='/login' component ={Login}/>
    <GuestRoute path='/forgotpassword' component ={ForgotPassword}/>
    <GuestRoute path='/adminlogin' component ={Adminlogin}/>
    <GuestRoute path='/photologin' component ={Photologin}/>
    <GuestRoute path ='/categories' component ={Categories}/>
    
    <Route exact path='/photographerdashboard' component = {PhotoDash}/>
    <Route exact path='/adminpanel' component = {AdminPanel}/>
    <ClientRoute path ='/clientdashboard' component={Clientdashboard}/>
    </Switch>
    </div>    
</BrowserRouter>
</Provider>
, document.getElementById('root'));



registerServiceWorker();
