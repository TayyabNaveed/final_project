import React,{Component} from 'react';
import {Alert} from 'reactstrap';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {validateToken,resetPassword } from '../actions/loginauth';
import AppNavbar from './AppNavbar';
import Footer from  './Footer';
import ResetPasswordForm from './resetpasswordform';
class ResetPasswordPage extends Component{
state={
    loading: true,
    success: false
}
componentDidMount(){
    this.props.validateToken(this.props.match.params.token)
    .then( ()=> this.setState({loading:false, success: true}))
    .catch( this.setState({loading:false, success:false}));

}
submit = (data) => this.props.resetPassword(data)
                    .then( ()=> this.props.history.push("/login"));
render(){
    const {loading,success}= this.state;
    const token = this.props.match.params.token;
    const divStyle= {
        marginTop: '10rem',
        marginRight: '10rem',
        marginLeft: '10rem',
        marginBottom: '5rem'
    }
return(
    <div>
    <AppNavbar/>    
    <div style={divStyle}>
        {loading && <Alert>Loading</Alert> }
        {!loading && success && <ResetPasswordForm submit = {this.submit} token= {token} /> }
        {!loading && !success && <Alert>Invalid Token</Alert>}
    </div>
    <Footer/>
    </div>

);
}
}

ResetPasswordPage.proptypes= {
    validateToken: PropTypes.func.isRequired,
    resetPassword: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
           token: PropTypes.string.isRequired 
        }).isRequired
    }).isRequired,
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired
};

export default connect (null, {validateToken, resetPassword })(ResetPasswordPage);