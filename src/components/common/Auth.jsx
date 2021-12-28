import React, {Component} from 'react'
import Login from './auth/Login';
import Register from './auth/Register';


export default class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {"fullname":null,"email":null,"password":null,"phoneNumber":null,"gender":null,"styleForm":props.styleForm, "login":false,"msgError":null,"msgErrorEmail":null,"msgErrorFullname":null}
    }

    onRegister = () => {
    //    let checkMail = this.state.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    //    let checkName = this.state.fullname.toLowerCase().match(/[0-9]/)
        
    //    if( this.state.email == null){
    //     this.setState({msgErrorEmail : "this email is incorrect"})
    //    }
    //    else if(checkMail === null) {
    //         this.setState({msgErrorEmail : "this email is incorrect"})
    //     }
    //     else{
    //         this.setState({msgErrorEmail : null})
    //     }


    //     if(checkName != null){
    //         this.setState({
    //             msgErrorFullname:"this full name is incorrect"                
    //         })
    //     }
    //     else{
    //         this.setState({msgErrorFullname : null})
    //     }

        alert("all informations are good");
    }


    onInputChange = (e) => {
        this.setState({            
            [e.target.id] : e.target.value
        })

        console.log(this.state.styleForm)
        console.log(this.state[e.target.id])
    }

    render(){
        return (
            this.state.login === true
            ?
            (
                <Login state = {this.state.styleForm} />
            )
            :
            (
                <Register onRegister= {this.onRegister} onInputChange = {this.onInputChange} state = {this.state.styleForm} />
            )
    )
    }

}
