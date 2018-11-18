import React, {Component} from 'react';
import '../stylesheets/carousel.css'; 

import AppNavbar from './AppNavbar';
import  Footer from './Footer';
import {Container, Row,Col }from 'reactstrap';
import Customcarousel from './customcarousel';

class Categories extends Component{



    render()    
{
    
return(
<div>

<AppNavbar/>

<Container  fluid>

<Col className="heading"> <h3  className="mt-3 " >Categories</h3></Col>
 
<Row>
<Col xs="1 " sm="1 " md="2" lg="3"></Col>
<Col xs=" 10" sm=" 10" md="8" lg="6">
<Customcarousel className="car"/>
</Col>
<Col xs=" 1" sm=" 1" md="2" lg="3"></Col>
 </Row>

 <Row>
     <Col>
     <h4 className="botcaption" >We at picturesque, capture moments so you can cherish them forever.</h4>
     </Col>
 </Row>
 
</Container>    

<Footer/>
</div>
);  
}
}
export default Categories;