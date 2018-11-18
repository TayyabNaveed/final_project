import React, {Component} from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import {connect} from 'react-redux';
import {getclient} from '../actions/clientactions';

import PropTypes from 'prop-types';
import ConfirmationMessage from './confirmationmessage';
class Clientdashboard extends Component{

    componentDidMount(){
        this.props.getclient();
    }
    render()
    {   
        return(
            <div className="outerdivforclientdashboard">
            <AppNavbar/>
            {!this.props.isConfirmed  && <ConfirmationMessage/>}
            <div className="clientdashboard">
             <h2> Welcome  {this.props.client.username} </h2>
             <h2> Lets Work {this.props.client.email}</h2>
             
            </div>
            <Footer/>
            </div>
        );
    }
}
Clientdashboard.propTypes = {

    isConfirmed: PropTypes.bool.isRequired,
    client : PropTypes.object.isRequired

};
function mapStateToProps(state){
return {
    isConfirmed: !!state.loginUser.confirmed,
    client: state.loginUser
}
}




export default connect(mapStateToProps,{getclient}) (Clientdashboard);