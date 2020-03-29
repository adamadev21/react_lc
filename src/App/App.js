import React, {Component} from 'react';
import {Route} from 'react-router-dom'
import Head from '../Features/Layout/Head'
import '../stylesheets/App.css';
import Login from '../Features/Authentication/Login'
import Home from '../Features/Layout/Home';
import Register from '../Features/Authentication/Register';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from '../Features/Layout/Footer';
import Testimonials from '../Features/Testimonials/Testimonials';
import Tutoring from '../Features/Forum/Tutoring';
import TutForm from '../Features/Forum/TutForm';
import { Form } from '../Features/Testarea/Form';
import MyForm from '../Features/Testarea/MyForm'
import { reduxForm } from 'redux-form';
class App extends Component {
  render(){
    return (
      <div className="App">
        <Head/>
        <Home/> 
        <reduxForm/>
        <MyForm/>
        <Route exact path='/tutoring' component={Tutoring}/>
        <Route exact path='/tutoring/form' component={TutForm}/>
        <Route exact path='/' component={Register}/>
        <Route exact path='/register' component={Register}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/testimonials' component={Testimonials}/>

        <Footer/>
      </div>
    )
  }
}

export default App;