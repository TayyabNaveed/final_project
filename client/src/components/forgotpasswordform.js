import React, {Component} from 'react';
import {
    Form, 
    FormGroup, Label, Input,Button,Alert} from 'reactstrap';
import '../stylesheets/login.css';
import InlineError from './InlineError';
import PropTypes from 'prop-types';
import isEmail from 'validator/lib/isEmail';



class ForgotPasswordForm extends Component {
state={
    data:{
        email:''
    },
    errors:{}
};
onChange=  e => this.setState({ 
    data :{ ...this.state.data , [e.target.name]: e.target.value }
});

onSubmit =(e) => {
    e.preventDefault();
    const errors= this.validate (this.state.data);
    this.setState({errors});

    if (Object.keys(errors).length === 0){
        this.props.submit(this.state.data)
       .catch( err => this.setState({errors: err.response.data.errors}));   
    }
};
validate = (data)=> {
    const errors= {};
    
    if (!isEmail(data.email)) errors.email = "Invalid Email";
    return errors;
};    


    render(){
        const {data,errors}= this.state;
        return(
            <div>
                <Form onSubmit={this.onSubmit}>
                { errors.global && (
                 <Alert color="warning">Something Went Wrong! <br/> {errors.global} </Alert>
             )}        
                    <FormGroup>
                       <Label>Email</Label> 
                       <Input onChange={this.onChange} value ={data.email}type="Email" name="email"  placeholder="Email" /> 
                       {errors.email && <InlineError text={errors.email}/> }
                    </FormGroup>
                    <Button className="submitbut">Reset Passowrd</Button>

                </Form>
            </div>
        );
    }

}
ForgotPasswordForm.propTypes={
    submit: PropTypes.func.isRequired
};
export default ForgotPasswordForm;