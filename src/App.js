import React, {components} from 'react';
import {Route, Link} from 'react-router-dom'
import Head from './Head'
import './App.css';
import Login from './Login'
import Home from './Home';
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './Footer';
import Testimonials from './Testimonials';
import Testiform from './Testiform';
class App extends React.Component {
  render(){
    return (
      <div className="App">
        <Head/>
        <Home/>
        <Route exact path='/' component={Register}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Testimonials/>
        <Footer/>
      </div>
    )
  }
}

export default App;