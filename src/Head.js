import React from 'react'
import './Head.css'
import './docs.min.css'
const img = "https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/s960x960/86661845_1533182496853352_1618332724966195200_o.jpg?_nc_cat=100&_nc_sid=85a577&_nc_ohc=Uag4yobTfhIAX_Jl34y&_nc_ht=scontent-msp1-1.xx&_nc_tp=7&oh=4fcb73116e8d932e10f82e1009cb3089&oe=5E94C832"
class Head extends React.Component {
    render(){
        return(
            <div className = 'Head'>
            <h1 className= 'Head-head'>Learning Center</h1>
             <h2 className = 'Head-onlinetut'>Tutoring</h2>
            <h2 className = 'Head-become'>Become a Tutor</h2>
            <h2 className = 'Head-testimonials'>Testimonials</h2>  
            <h2 className = 'Head-contact'>Contact</h2>
            <h2 className = 'Head-about'>About</h2>
            <h2 className = 'Head-support'>Support</h2>
            </div>
        );
    }
}
export default Head;