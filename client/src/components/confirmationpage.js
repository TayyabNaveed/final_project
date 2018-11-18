import React,{Component} from 'react';
import {Alert} from 'reactstrap';
import {Link} from 'react-router-dom';
import {confirm} from '../actions/loginauth';
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import {MdCheckCircle, MdError} from 'react-icons/md';
class ConfirmationPage extends Component {
state={
    load: true,
    success:  false
}
componentDidMount(){
    this.props.confirm(this.props.match.params.token)
    .then(() => this.setState({load: false, success: true}))
    .catch (()=> this.setState({load: false, success: false}));
}
render(){
    const {load, success} = this.state;
return(

<div>
{load && <Alert color="primary" >


Validating Your Email</Alert>}

{!load && success && <Alert color="success"> 
    <MdCheckCircle/>
    Thankyou, Your account has been verified
    
<Link to="/clientdashboard">Go to Dashboard</Link>
</Alert>
}
{!load && !success && <Alert color="danger">
<MdError/>
Oops, Invalid token
</Alert>
    }
</div>

);
}
}

ConfirmationPage.propTypes = {
    confirm: PropTypes.func.isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            token: PropTypes.string.isRequired
        }).isRequired
    }).isRequired

};
export default connect ( null, {confirm}) (ConfirmationPage);