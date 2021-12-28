import React, {useState} from 'react'
import Auth from './Auth'
import NavBar from './NavBar'

export default function Home() {
    const [authDisplayed, setAuthDisplayed] = useState("")
    const onRegOrLogClick = (state) => {
        setAuthDisplayed(state)
    }

    return (
        <div>
        {
            console.log(authDisplayed)
        }
            <NavBar  onRegOrLogClick = {onRegOrLogClick}/>
            <Auth styleAuth={authDisplayed} />
        </div>
    )
}
