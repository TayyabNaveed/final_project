import React, { Component } from 'react';
import '../stylesheets/Footer.css';
import logo from './../resources/Icon.jpeg';
import {Container,Row,Col,Button} from 'reactstrap';
import {Image} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  FaFacebook, FaInstagram, FaGithubSquare, FaTwitterSquare } from 'react-icons/fa';
import { IconContext } from "react-icons";


class Footer extends Component {
  render() {
    return (

      <div>
        <Container className=" Footer " fluid >
          <Row>
            <Col   sm="3" md="3" lg="3" >
            <ul className="footerList d-none d-sm-block ">
              <li><h4>Categories</h4></li>
              <li><h4>Policy</h4></li>
              <li><h4>Partners</h4></li>
              <li><h4>FAQs</h4></li>
             </ul>
            </Col>
            <Col  sm="3" md="3" lg="3" >
             <ul className=" d-none d-sm-block footerList ">
              <li><h4>Home</h4></li>
              <li><h4>Tutorials</h4></li>
              <li><h4>Join Us</h4></li>
             </ul>
            </Col>
            <Col xs="12" sm="6" md="6" lg="6" >
             <Row>
               <Col  xs="12" sm="12" md="12" lg="12" className="footer2heading">
               <h2>Connect with Us</h2>
               </Col>
             </Row>
             <Row> 
             <Col xs="12" sm="12" md="12" lg="8 " >
             <input className="subscribe "  type="email" name="UserEmail" placeholder="Enter Email"/> 
             
             </Col>
              <Col xs="12" sm="12" md="12" lg="3">
                <Button className="subButton align-self-center" size="lg">
                  Subscribe
                </Button>
              </Col>
              </Row>
                         
            
              <Row className="socialicons">
                <Col xs="2" md="2" lg="2" sm="2">
                  <IconContext.Provider value={{size:"3em" }} >
                  <a href="http://www.github.com"><FaGithubSquare/></a>
                  </IconContext.Provider>
                  </Col>
                  <Col xs="2" md="2" lg="2" sm="2">
                  <IconContext.Provider value={{size:"3em" }} >
                    <a href="http://www.facebook.com"><FaFacebook/></a>
                  </IconContext.Provider>
                  </Col>
                <Col xs="2" md="2" lg="2" sm="2">
                <IconContext.Provider value={{size:"3em" }} >
                  <a href="http://www.instagram.com"><FaInstagram/></a>
                  </IconContext.Provider>
                </Col>
                <Col xs="2" md="2" lg="2" sm="2" >
                <IconContext.Provider value={{size:"3em" }} >
                <a href="http://www.twitter.com" ><FaTwitterSquare/></a>
                </IconContext.Provider>
                </Col>
                </Row>
              </Col>
            </Row>
          <Row className="footerbase">
           <Col xs="2" sm="2" md="2" lg="1">
            <Image className="FooterBaseLogo" src={logo} rounded />
           </Col> 
           <Col xs="2" sm="2" md="2" lg="1">
            Cookies
           </Col>
           <Col xs="2" sm="2" md="2" lg="1">
            Legal
           </Col>
           <Col xs="4" sm="4" md="4" lg="6">
            </Col>
            <Col xs="4" sm="4" md="4" lg="3">
            &copy; 2018 Picturesque  
            </Col>
            
           </Row>
        </Container>
      </div>
     );
  }
}
export default Footer;