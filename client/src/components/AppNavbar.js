import React, {Component} from 'react';
import {
  Container,	
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,

  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import PropTypes from 'prop-types';
import '../stylesheets/AppNavbar.css';
import logo from './../resources/Icon.jpeg';
import {connect} from 'react-redux';
import {logout} from '../actions/loginauth';




class AppNavbar extends Component{


	state = {
    isOpen : false,
    
  }
  
	toggle = ()=> {
		this.setState({
			isOpen: !this.state.isOpen
		});
	}
	
	render(){
   
		
    return ( 
     	<div>
			<Navbar  light  expand="sm" className=" navbar fixed-top clearfix ">
			<Container>
      {this.props.isAuthenticated ?  
      
      <NavbarBrand className="NavbarTitle float-left" href="/clientdashboard" > 
			<img className="logo" src = { logo } alt="logo"/>
			Picturesque </NavbarBrand>
             :
			<NavbarBrand className="NavbarTitle float-left" href="/" > 
			<img className="logo" src = { logo } alt="logo"/>
			Picturesque </NavbarBrand>}
			
			<NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto float-right" navbar>
         {this.props.isAuthenticated ? <NavItem><NavLink href="/" onClick={logout()}>Logout </NavLink> </NavItem>   :     
             <NavItem>
                <NavLink href="/login"> Login   </NavLink>
              </NavItem>}
             {this.props.isAuthenticated ? <div></div> : 
               <NavItem>
                <NavLink href="/signup">Sign Up </NavLink>
             </NavItem> }
              {this.props.isAuthenticated ? <div></div>:
               <NavItem>
               <NavLink href="/categories">Categories</NavLink>
              </NavItem>                           }    
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  More
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/adminlogin">
                   Login as Admin
                   </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                   <NavLink href="photologin"> 
                   Login as Photographer
                   </NavLink>
                  </DropdownItem>
  
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/about">
                    About Us
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/policy">
                    Policy
                    </NavLink>
                  </DropdownItem>
                 
                  
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
			
			

			</Container>

			</Navbar>
			</div>
      );		
      
 }
}
AppNavbar.propTypes= {
  isAuthenticated: PropTypes.bool.isRequired,
  logout:PropTypes.func.isRequired 
};
const mapStateToProps = (state) => ({

	isAuthenticated: !!state.loginUser.token

});

export default connect (mapStateToProps, {logout} ) (AppNavbar);