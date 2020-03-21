import React, { Component } from "react";
import "./Testimonials.css";
class Testiform extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", text: "", coutry: "", image: "", email: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }
  handleSubmit(evt) {
    this.props.addTestimony(this.state);
    this.setState({ name: "", text: "", country: "", image: "", email: "" });
    evt.preventDefault();
  }
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="container myform justify-content-center"
      >
        <h2>Submit a Testimonial</h2>
        <div className="d-flex justify-content-center">
          <label htmlFor="name">Name: </label>
          <input
            id="name"
            name="name"
            placeholder="Enter your full name"
            value={this.state.name}
            onChange={this.handleChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <label htmlFor="email">Email: </label>
          <input
            id="email"
            name="email"
            placeholder="Enter your current email"
            value={this.state.email}
            onChange={this.handleChange}
          />
        </div>
        <div className="d-flex justify-content-center">
          <label htmlFor="image">Image: </label>
          <input
            id="image"
            name="image"
            placeholder="Paste the url to your image"
            value={this.state.image}
            onChange={this.handleChange}
          />
        </div>
        {/* <div className='d-flex justify-content-center'><label htmlFor="country">Location:</label>
                    <input
                    id='country'
                     name='country'
                     placeholder='What country do you live'
                    value ={this.state.country} 
                    onChange={this.handleChange}
                  
                   
                    /> */}

        <div className="d-flex justify-content-center">
          <label htmlFor="">Text: </label>
          <textarea
            id="te"
            name="text"
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Type your text"
            cols="50"
            rows="10"
          ></textarea>
        </div>
        <div className="wrapit">
          <button name="submit" className="submit">
            Submit
          </button>
        </div>
      </form>
    );
  }
}
export default Testiform;
