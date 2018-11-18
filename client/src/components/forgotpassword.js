import React, {Component} from 'react';
import {Alert,Container,Row,Col,Jumbotron} from 'reactstrap';
import ForgotPasswordForm from './forgotpasswordform';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {resetPasswordRequest} from '../actions/loginauth';
class ForgotPassword extends Component{
state={
     success:false
    };

submit = data => this.props.resetPasswordRequest(data).then(() => this.setState({success:true}) );

render(){
    return(
        <div>
        <AppNavbar/>
        
        <Container className="cont mt-3" fluid>
            <Row>
            <Col xs="0" md="3" sm="1" lg="3"></Col>
            <Col xs="12" md="6" sm="10" lg="6">
            <Jumbotron className="jumbo">

             
             {this.state.success ? <Alert color="success" > Email has been Sent </Alert> 
                            :
             <ForgotPasswordForm submit= {this.submit}/> 
             }
             </Jumbotron>
            </Col>
                
            <Col xs="0" md="3" sm="1" lg="3"></Col>
            
            </Row>
            </Container>
        
        
        
        
        <Footer/>
        </div>
    );
    }
}
ForgotPassword.propTypes={
    resetPasswordRequest: PropTypes.func.isRequired
}
export default connect (null, {resetPasswordRequest })(ForgotPassword);