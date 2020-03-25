import React, {Component} from 'react';
import logo from '../../logo-image.png'
import '../../stylesheets/Home.css'
import 'bootstrap/dist/css/bootstrap.css';
class Home extends Component {
    render(){
        return(
        <div className='Home'> 
          <img className= 'Home-img' src={logo} alt="Logo" />;
       
        </div>
        )
    }
}

export default Home;