import React, { Component } from 'react'
import FormUserInfo from './FormUserInfo'
import FormUserInfo2 from './FormUserInfo2'
import FormUserInfo3 from './FormUserInfo3'

export default class UserForm extends Component {
  state = {
    step: 1,
    firstname: '',
    lastname: '',
    dob: '',
    email: '',
    city: '',
    country: '',
  }

  // Go to next step
  nextStep = () => {
    this.setState({
      step: this.state.step + 1
    })
  }
  // Go back one step
  previousStep = () => {
    this.setState({
      step: this.state.step - 1
    })
  }

  // handleChange =input => e => {
  //   this.setState({
  //     [input]: e.target.value
  //   })
  // }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const { step, firstname, lastname, dob, email, city, country } = this.state
    const value = { step, firstname, lastname, dob, email, city, country }

    switch (step) {
      case 1:
        return (
          <FormUserInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            value={value}
          />
        )
      case 2:
        return (
          <FormUserInfo2
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            value={value}
          />
        )
      case 3:
        return (
          <FormUserInfo3
            nextStep={this.nextStep}
            previousStep={this.previousStep}
            handleChange={this.handleChange}
            value={value}
          />
        )
      default:
        return('invalid request')
    }
  }
}