import React from "react"
import {FcGoogle } from 'react-icons/fc'
import {FaFacebook } from 'react-icons/fa'
import { Link } from "react-router-dom"

const Register = ()=>{

    return (
        <div className="register">
            <h1>Create your account.</h1>
            <p>Get product recommendations, enjoy smart shopping</p>
            <div className="sso">
                <button className="google-signin"><FcGoogle className="sso-icon-google"/> Sign up with Google</button>
                <button className="facebook-signin"><FaFacebook className="sso-icon-fb"/> Sign up with Facebook</button>
            </div>
            -------------------------------- or ----------------------------------
       <input type="text" name ="fname" placeholder = "First Name"/>
       <input type="text" name ="lname" placeholder = "Last Name"/>
       <input type="email" name ="email" placeholder = "Email"/>
       <input type="password" name ="password" placeholder = "Password"/>
        <p>By clicking "Sign up," you agree to our Terms of Use and our Privacy Policy.  <br></br>Have an account ? <Link to='/signin'>Sign in</Link></p>
        <p></p>
       <button className="signup">Sign up</button>
        </div>
    )
}
export default Register