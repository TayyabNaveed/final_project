import React, {Component} from 'react';
import AppNavbar from './AppNavbar';
import Footer from './Footer';
import {connect} from 'react-redux';
import {getphotographers} from '../actions/photographeractions';
import PropTypes from 'prop-types'

class PhotoDash extends Component{
componentDidMount(){
    this.props.getphotographers();

}
render(){
    return(<div>

        <AppNavbar/>


        <div>
            Welcome! {this.props.photographer.username}  
        </div>

        <Footer/>

    </div>);
}




}
PhotoDash.propTypes = {

    photographer : PropTypes.object.isRequired

};
function mapStateToProps(state){
return {
    photographer: state.loginUser
}
}



export default connect(mapStateToProps, {getphotographers}) (PhotoDash);