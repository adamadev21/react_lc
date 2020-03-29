import React, { Component } from 'react'
import { connect } from 'react-redux'
import ContactForm from './ContactForm'
export class Form extends Component {
    submit = values => {
        console.log(values)
      }
    render() {
        return <ContactForm onSubmit={this.submit} />
    }
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
