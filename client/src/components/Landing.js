import React, {Component} from 'react';
import '../stylesheets/Landing.css';
import {Button,Row,Col} from 'reactstrap';
//import image from '../resources/pic.jpg';
import {NavLink} from 'react-router-dom';
class Landing extends Component{

render(){
 return(
    <div className="Landing">
    
    <Row>
    <Col >    
    <h1>Beauty Lies in the eyes <br/> of the photographer.</h1>
    </Col>
    </Row>
    <Row>
     <Col>   
     <NavLink to="/login">
    <Button className= "getstarted " size="lg" > Get Started </Button>
    </NavLink>
    </Col>
    </Row>
    </div> 
);
}






}
export default Landing;