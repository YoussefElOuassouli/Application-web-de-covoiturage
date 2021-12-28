import React, {Component} from 'react'


export default class Auth extends Component {
    constructor(props){
        super(props)
        this.state = {"fullname":null,"email":null,"password":null,"phoneNumber":null,"gender":null, "login":false,"msgError":null,"msgErrorEmail":null,"msgErrorFullname":null}
    }

    onRegister = () => {
       let checkMail = this.state.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
       let checkName = this.state.fullname.toLowerCase().match(/[0-9]/)
        
       if(checkMail === null) {
            this.setState({msgErrorEmail : "this email is incorrect"})
            return;
        }
        else{
            this.setState({msgErrorEmail : null})
        }


        if(checkName != null){
            this.setState({
                msgErrorFullname:"this full name is incorrect"                
            })
        }
        else{
            this.setState({msgErrorFullname : null})
        }



        alert("all informations are good");
    }


    onInputChange = (e) => {
        this.setState({            
            [e.target.id] : e.target.value
        })


        console.log(this.state[e.target.id])
    }

    render(){
        return (
            this.state.login === true
            ?
            (
                <div className="login-form">
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            )
            :
            (
                <div className="login-form">
                    <div className="mb-3">
                        <input type="email" className="form-control" id="fullname"  onChange={this.onInputChange} placeholder='Full Name'/>
                        <div id="emailHelp" className="form-text">{this.state.msgErrorFullname}</div>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" onChange={this.onInputChange} placeholder='email address'/>
                        <div id="emailHelp" className="form-text">{this.state.msgErrorEmail}</div>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="passowrd"  onChange={this.onInputChange} placeholder="password"/>
                        <div id="emailHelp" className="form-text">{this.state.msgError}</div>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="confirm"  onChange={this.onInputChange} placeholder='confirm password'/>
                        <div id="emailHelp" className="form-text">{this.state.msgError}</div>
                    </div>
                    <div className="mb-3">
                        <input type="email" className="form-control" id="phoneNum"  onChange={this.onInputChange} placeholder='Phone Number'/>
                        <div id="emailHelp" className="form-text">{this.state.msgError}</div>
                    </div>
                    <div className="mb-3">
                        <select className="form-select" id='gender' aria-label="Default select example">
                            <option disabled>Open this select menu</option>
                            <option value="M">Male</option>
                            <option value="F">Female</option>
                        </select>
                        <div id="emailHelp" className="form-text">{this.state.msgError}</div>
                    </div>
                    <button type="submit" onClick={this.onRegister} className="btn btn-info white-font-clr">Login</button>
                </div>
            )
    )
    }

}
