import React from 'react'

export default function Register({onRegister,onInputChange,msgErrorFullname,msgErrorEmail,msgError,state}) {
    return (
        <div className={"login-form "+state}>
            <div className="mb-3">
            
                <input type="email" className="form-control" id="fullname"  onChange={onInputChange} placeholder='Full Name'/>
                <div id="emailHelp" className="form-text">{msgErrorFullname}</div>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="email" onChange={onInputChange} placeholder='email address'/>
                <div id="emailHelp" className="form-text">{msgErrorEmail}</div>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="passowrd"  onChange={onInputChange} placeholder="password"/>
                <div id="emailHelp" className="form-text">{msgError}</div>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="confirm"  onChange={onInputChange} placeholder='confirm password'/>
                <div id="emailHelp" className="form-text">{msgError}</div>
            </div>
            <div className="mb-3">
                <input type="email" className="form-control" id="phoneNum"  onChange={onInputChange} placeholder='Phone Number'/>
                <div id="emailHelp" className="form-text">{msgError}</div>
            </div>
            <div className="mb-3">
                <select className="form-select" id='gender' aria-label="Default select example">
                    <option disabled>Open this select menu</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>
                <div id="emailHelp" className="form-text">{msgError}</div>
            </div>
            <button type="submit" onClick={onRegister} className="btn btn-info white-font-clr">Login</button>
        </div>
    )
}
