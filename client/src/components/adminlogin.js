import React, {Component} from 'react';
import AppNavBar from './AppNavbar';
import Footer from './Footer';
import {
    Row,Container,Jumbotron,Col} from 'reactstrap';
import '../stylesheets/login.css';
import Adminloginform from './adminloginform';
import {connect} from 'react-redux';
import {adminlogin} from '../actions/loginauth';
import PropTypes from 'prop-types'



class AdminLogin extends Component{

    submit = data => 
    this.props.adminlogin(data).then( () => this.props.history.push("/adminpanel"));


render()
{    return(
    <div className="Login">
    <AppNavBar/>
        
       
        <Container className="cont mt-3" fluid>
        <Row>
        <Col xs="0" md="3" sm="1" lg="3"></Col>
        <Col xs="12" md="6" sm="10" lg="6">
        <Jumbotron className="jumbo">

         <h4> Login as Admin </h4> <hr/>
        <Adminloginform submit={this.submit} />         
            

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


AdminLogin.propTypes={
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    adminlogin:  PropTypes.func.isRequired


};
export default connect (null,{adminlogin}) (AdminLogin);