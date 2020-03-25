import React, {Components}from 'react'
import '../../stylesheets/Register.css'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
const vss = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {username:"",password:"", email: ""};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this)
      }
    
     handleChange(evt){
          this.setState({[evt.target.name]: evt.target.value});

      }
      handleSubmit(e){
          alert('Good job!!!! You submitted it!')
      }
      render(){
        return(
<div className='Register container'>
    <form  onSubmit={this.handleSubmit} className="form ">
       
        {/* <button className='btn button-large white'>Sign Up</button>
        <button className='button white'>Sign Up</button> */}
        <h1 className="header">Join The Learning Universe!</h1>
        <div className= 'register'>
            <Link active to={'/register'} className = 'btn btn-md white login1'>
                Sign In
            </Link>
            <Link to={'/login'} className = 'btn btn-md white'>
                Sign Up
            </Link>
        </div>
        <div className="inputWithIcon">
            <input className='clever' 
             name ='name' 
             type="text" 
            value ={this.state.username} 
            onChange= {this.handleChange} 
            placeholder="Enter your Full Name"/>
            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div className="inputWithIcon">
            <input className='clever' 
             name ='username' 
             type="text" 
            value ={this.state.username} 
            onChange= {this.handleChange} 
            placeholder="Enter you Username"/>
            <i className="fa fa-user fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div className="inputWithIcon">
            <input className='clever' 
             name ='email' 
             type="text" 
            value ={this.state.email} 
            onChange= {this.handleChange} 
            placeholder="Enter a valid email"/>
            <i className="fa fa-envelope fa-lg fa-fw" aria-hidden="true"></i>
        </div>

        <div className="inputWithIcon">
            <input className='clever' 
            name='password' 
            type="password"
            value ={this.state.password} 
            onChange= {this.handleChange} 
             placeholder="Choose a password" required />
            <i className="fa fa-lock fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div className="inputWithIcon">
            <input className='clever' 
            name='password' 
            type="password"
            value ={this.state.password} 
            onChange= {this.handleChange} 
             placeholder="Confirm Password" required />
            <i className="fa fa-check fa-lg fa-fw" aria-hidden="true"></i>
        </div>
        <div className="inputWithRadio">
            <p>
                I have read the rules and policies of this service.
            </p>
         </div> 
         <button className = 'button btn btn-md white submit'>
                Submit
            </button>
    </form>
</div>
);}}
export default Register;
