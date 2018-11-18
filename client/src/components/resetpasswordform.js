import React from 'react';
import {
    Form, 
    FormGroup, Label, Input,Button,Alert, Jumbotron} from 'reactstrap';
import '../stylesheets/login.css';
import PropTypes from 'prop-types'
import InlineError from './InlineError';

class ResetPasswordForm extends React.Component{

    state={
        data:{
             token: this.props.token,
             password: '',
             passwordconfirmation: ''   
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
    validate= (data) => {
        const errors = {};
        if(!data.password) errors.password = "can't be blank";
        if(data.password !== data.passwordconfirmation ) errors.password= "Password don't match";
        return errors;

    }; 



render(){
    const {errors,data} = this.state;
    return(


        <Jumbotron className="jumbo">
        <h4>Reset Password</h4>
        <Form onSubmit ={this.onSubmit} >
        { errors.global && (
            <Alert color="warning">Something Went Wrong! <br/> {errors.global} </Alert>
        )}      
            <FormGroup>
            <Label for="pwd">Password</Label>
            <Input  onChange={this.onChange}
                    value={data.password}
                    type="password" 
                    name="password" 
                    id="pwd" 
                    placeholder="Enter Your New Password" 
            />

            {errors.password && <InlineError text={errors.password}/> }
                
            <Label for ="pwdconfirm">Confirm Password </Label>
            <Input  onChange={this.onChange} 
                    value= {data.passwordconfirmation}
                    type="password"
                    name="passwordconfirmation"
                    id="pwdconfirm"
                    placeholder="Re enter your new password"
                    />
             {errors.passwordconfirmation && <InlineError text={errors.passwordconfirmation}/> }       
            </FormGroup>
        <Button className="submitbut" > ResetPassword </Button>
        
        </Form>
        </Jumbotron>

        );

}
}
ResetPasswordForm.proptypes={

    submit: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired

}

export default ResetPasswordForm;