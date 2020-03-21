import React, {Component} from 'react'
import './Login.css'
import './Register.css'
import 'bootstrap/dist/css/bootstrap.css';
import {Route, Link} from 'react-router-dom'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
class Login extends React.Component {
    render(){
        return (
    <div className='Login container'>
        <form >
        <h1 className="header">Welcome back!</h1>
        <div>
            <div>
            <div className= 'register'>
            <Link to={'/register'} className = 'btn btn-md white'>
                Sign In
            </Link>
            <Link to={'/login'} className = 'btn btn-md white change'>
                Sign Up
            </Link>
        </div>
            </div>
        

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block">Submit</button>
            <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
            </p>
            </div>
        </form>
            </div>
            
    );
}
}
export default Login;