import React, {  Component } from 'react'
import './styles/IdeaForm.scss'
import FormInput from './FormInput.js'


export default class IdeaForm extends Component {

  render() {
    return (
      <div className='form-container'>
        <FormInput />
      </div>
    )
  }
}
