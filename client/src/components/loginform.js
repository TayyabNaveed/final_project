import React, {Component} from 'react';
import {
    Form, 
    FormGroup, Label, Input,Button,Alert} from 'reactstrap';
import '../stylesheets/login.css';
import InlineError from './InlineError';
import PropTypes from 'prop-types';

class LoginForm extends Component{

    state={
        data:{
             username:'',
             password:'',     

        },
        loading:false,
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
        
        if (! data.username) errors.username = "cant be blank";
        if (! data.password) errors.password = "cant be blank";
        return errors;
    };

render(){
    const {errors,data} = this.state;

    return(

    <Form onSubmit={this.onSubmit}>
        { errors.global && (
            <Alert color="warning">Something Went Wrong! <br/> {errors.global} </Alert>
        )}         
        

        <FormGroup >

            <Label >Name</Label>
            <Input onChange={this.onChange} value ={data.username}type="text" name="username"  placeholder="UserName" />    
            {errors.username && <InlineError text={errors.username}/> }
            </FormGroup>
            <FormGroup>
            <Label for="pwd">Password</Label>
            <Input onChange={this.onChange}value={data.password}type="password" name="password" id="pwd" placeholder="Enter Your Password" />

            {errors.password && <InlineError text={errors.password}/> }
        </FormGroup>


        <Button className="submitbut">Submit</Button>

</Form>
);
}

}
LoginForm.propTypes ={
submit: PropTypes.func.isRequired
};

export default LoginForm; 
