import React, {Component} from 'react';
import {Form, FormGroup, Label, Input,Button} from 'reactstrap';
import '../stylesheets/signup.css';
import PropTypes from 'prop-types'
import InlineError from './InlineError';
class Signupform extends Component{
   
    state={
         info:{
             username:'',
             email:'',
             password:''
         },   
         errors:{}

    }


    onSubmit=(e)=> {
        e.preventDefault();
        const errors= this.validate (this.state.info);
        this.setState({errors});
        if (Object.keys(errors).length === 0){
            this.props.submit(this.state.info)
            .catch( err => this.setState({errors: err.response.data.errors}));   
         }
   

    }
    onChange=(e)=> {
        this.setState({
            info :{ ...this.state.info , [e.target.name]: e.target.value }
        });
        }
        validate = (info)=> {
            const errors= {};
            
            if (! info.username) errors.username = "cant be blank";
            if (! info.email) errors.email = "cant be blank";
            if (! info.password) errors.password = "cant be blank";
            
            return errors;
        };    


    render(){
        const {errors} = this.state;
        return(
            <Form onSubmit={this.onSubmit}>
            
            <FormGroup >

            <Label >Name</Label>
            <Input onChange={this.onChange} value={this.state.info.username}  type="text" name="username"  placeholder="UserName" />    
            {errors.username && <InlineError text={errors.username}/> }
             </FormGroup>
            
            
            <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this.onChange} value={this.state.info.email}type="email" name="email"  placeholder="Enter Your Email" />
            {errors.email && <InlineError text={errors.email}/> }
            </FormGroup>

            
            
            <FormGroup>
            <Label for="pwd">Password</Label>
            <Input onChange={this.onChange} value={this.state.info.password} type="password" name="password" id="pwd" placeholder="Enter Your Password" />
            {errors.password && <InlineError text={errors.password}/> }
            </FormGroup>



            <Button className="submitbut">Submit</Button>

            </Form>
        );


    }
}
Signupform.propTypes={
    submit:PropTypes.func.isRequired
}


export default Signupform;