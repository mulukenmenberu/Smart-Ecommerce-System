import React from "react"
import {FcGoogle } from 'react-icons/fc'
import {FaFacebook } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Signin = ()=>{

    return (
        <div className="register">
            <h1>Sign in to your account.</h1>
            <p>Get product recommendations, enjoy smart shopping</p>
            <div className="sso">
                <button className="google-signin"><FcGoogle className="sso-icon-google"/> Sign in with Google</button>
                <button className="facebook-signin"><FaFacebook className="sso-icon-fb"/> Sign in with Facebook</button>
            </div>

        <input type="email" name ="email" placeholder = "Email"/>
       <input type="password" name ="password" placeholder = "Password"/>
        <p>New here ? <Link to='/create-account'>Register</Link></p>
       <button className="signup">Sign in</button>
        </div>
    )
}
export default Signin