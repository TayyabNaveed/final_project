import React, {Component} from 'react';
import '../App.css';
import AppNavBar from './AppNavbar';
import Footer from './Footer';
import {
    Row,Container,Jumbotron,Col} from 'reactstrap';
import '../stylesheets/signup.css';
import Signupform from './signupform';
import {connect} from 'react-redux';
import {signup} from '../actions/signupAction';
import PropTypes from 'prop-types'


class Signup extends Component{
    
    submit = data => 
        this.props.signup(data).then( () => this.props.history.push("/clientdashboard"));
        
    
    render()
    {
        return(
        <div className="Signup">
        <AppNavBar/>
        <Container className="cont mt-3" fluid>
            <Row>
            <Col xs="0" md="3" sm="1" lg="3"></Col>
            <Col xs="12" md="6" sm="10" lg="6">
            <Jumbotron className="jumbo">

             <h4> Sign Up</h4> <hr/>
            <Signupform  submit={this.submit} />   

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
Signup.propTypes={

    history:PropTypes.shape({
        push:PropTypes.func.isRequired

    }).isRequired,
    signup:PropTypes.func.isRequired
}

export default connect (null,{signup})(Signup);