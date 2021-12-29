import React,{useState} from 'react'
import close from '../../../assets/close.png'
import "../common.css"
export default function Register(props) {
    const [display, setDisplay] = useState("");
    const onCloseClick = () => {
        setDisplay("Register");
    }

    return (
        <div className={"login-form "+display}>
            <a onClick={()=> onCloseClick}><img src={close} className="close-auth-form" height={"25px"} alt="close"/></a>
            <div className="mb-3">
                <input type="email" className="form-control" id="fullname"  onChange={props.onInputChange} placeholder='Full Name'/>
                <div id="emailHelp" className="form-text">{props.msgErrorFullname}</div>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="email" onChange={props.onInputChange} placeholder='email address'/>
                <div id="emailHelp" className="form-text">{props.msgErrorEmail}</div>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="passowrd"  onChange={props.onInputChange} placeholder="password"/>
                <div id="emailHelp" className="form-text">{props.msgError}</div>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="confirm"  onChange={props.onInputChange} placeholder='confirm password'/>
                <div id="emailHelp" className="form-text">{props.msgError}</div>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="phoneNum"  onChange={props.onInputChange} placeholder='Phone Number'/>
                <div id="emailHelp" className="form-text">{props.msgError}</div>
            </div>
            <div className="mb-3">
                <select className="form-select" id='gender' aria-label="Default select example">
                    <option disabled>Open this select menu</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
                <div id="emailHelp" className="form-text">{props.msgError}</div>
            </div>
            <button type="submit" onClick={props.onRegister} className="btn btn-info white-font-clr">Login</button>
        </div>
    )
}
