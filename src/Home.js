import React, {Components} from 'react';
import logo from './logo-image.png'
import './Home.css'
import 'bootstrap/dist/css/bootstrap.css';
class Home extends React.Component {
    render(){
        return(
        <div className='Home'> 
          <img className= 'Home-img' src={logo} alt="Logo" />;
       
        </div>
        )
    }
}

export default Home;