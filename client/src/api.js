import axios from 'axios';


export default {
    clients:{  
        login: (credentials) =>
             axios.post("/api/loginAuth", {credentials}).then( res => res.data.client) 
        ,
        signup:(cred) => axios.post("/api/clients", {cred}).then(res => res.data.client)
        ,
        confirm: (token) => axios.post("/api/loginAuth/confirmation",{token}).then(res=> res.data.client)
        ,
        resetPasswordRequest : (email) => axios.post("/api/loginAuth/reset_password", {email })
        ,
        validateToken : (token) => axios.post("/api/loginAuth/validate_token", {token})
        ,
        resetPassword: (data) => axios.post("/api/loginAuth/resetpass" , {data})
    },
    photographers:{
        login: (credentials) => axios.post("/api/photographers/login", {credentials})
            .then(res => res.data.photographer)
    },
    admin:{
        login: (credentials) => axios.post("/api/admins/login", {credentials})
            .then(res => res.data.admin)
        }
}   