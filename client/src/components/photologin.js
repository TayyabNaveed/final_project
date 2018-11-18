import React, {Component} from 'react';

import AppNavBar from './AppNavbar';
import Footer from './Footer';
import {
    Row,Container,Jumbotron,Col} from 'reactstrap';
import '../stylesheets/login.css';
import Photologinform from './photologinform';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {photologin} from '../actions/loginauth';



class PhotoLogin extends Component{


    submit = data => 
    this.props.photologin(data).then( () => this.props.history.push("/photographerdashboard"));


render()
{    return(
    <div className="Login">
    <AppNavBar/>
        
       
        <Container className="cont mt-3" fluid>
        <Row>
        <Col xs="0" md="3" sm="1" lg="3"></Col>
        <Col xs="12" md="6" sm="10" lg="6">
        <Jumbotron className="jumbo">

         <h4> Login as Photographer </h4> <hr/>
        <Photologinform submit={this.submit}/>         
            

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
PhotoLogin.propTypes={
    history: PropTypes.shape({
        push: PropTypes.func.isRequired
    }).isRequired,
    photologin:  PropTypes.func.isRequired


};
export default connect (null, {photologin})(PhotoLogin);