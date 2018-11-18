import React, {Component} from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';




class AdminPanel extends Component{

render(){
    return(<div>

        <AppNavbar/>


        <div>
            Welcome!
        </div>

        <Footer/>

    </div>);
}




}
export default AdminPanel;