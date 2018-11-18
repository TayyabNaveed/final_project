import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppNavBar from './AppNavbar';
import Footer from './Footer';
import {
    Row,Container,Jumbotron,Col} from 'reactstrap';
import '../stylesheets/login.css';
import LoginForm from './loginform';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {login} from '../actions/loginauth';


class Login extends Component{
   

    submit = data => 
        this.props.login(data).then( () => this.props.history.push("/clientdashboard"));
        

    render()
    {
        
        
        return(
        <div className="Login">
        <AppNavBar/>
            
           
            <Container className="cont mt-3" fluid>
            <Row>
            <Col xs="0" md="3" sm="1" lg="3"></Col>
            <Col xs="12" md="6" sm="10" lg="6">
            <Jumbotron className="jumbo">

             <h4> Login</h4> <hr/>
             
             <LoginForm submit={this.submit} />   
             <Link to="/forgotpassword">Forgot Password?</Link>   
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
Login.propTypes={
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    login:  PropTypes.func.isRequired


};

export default connect(null,{ login })(Login);