import React, { Component } from 'react'
import Auth from './Auth'
import HomeContent from './HomeContent'
import NavBar from './NavBar'

export default class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            isLoginOrRegister : "",
        }
    }

    onRegOrLogClick = (state) => {
        this.setState({...this.state,
            isLoginOrRegister : state
        })
    }

    render() {
        return (
            <div>
            {
                console.log("in Home comp :"+ this.state.authDisplayed)
            }
                <NavBar  onRegOrLogClick = {this.onRegOrLogClick}/>
                {/* <Auth styleAuth={this.state.isLoginOrRegister}/> */}
                <HomeContent />
            </div>
        )
    }
}