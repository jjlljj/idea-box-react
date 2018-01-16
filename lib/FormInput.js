import React, {  Component } from 'react'
import './styles/FormInput.scss'


export default class FormInput extends Component {
  constructor() {
    super()
    this.state = {
      titleVal: '',
      bodyVal: ''
    }

    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleBodyChange = this.handleBodyChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTitleChange(e) {
    this.setState({titleVal: e.target.value})
  }

  handleBodyChange(e) {
    this.setState({bodyVal: e.target.value})
  }

  handleSubmit() {
    let card = {
      id: Date.now(),
      title: this.state.titleVal,
      body: this.state.bodyVal,
      quality: 'swill'
    }
    this.setState({bodyVal:'', titleVal: ''})
    this.props.addIdeaCard(card)
  }

  render() {
    return (
      <div className='form-input-wrapper'>
        <h1>IdeaBox</h1>
        <input 
          placeholder="Title" 
          label='title-input'
          value={this.state.titleVal}
          onChange={this.handleTitleChange}
          />
        <input 
          placeholder="Body" 
          value={this.state.bodyVal}
          onChange={this.handleBodyChange}
          />
        <button onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    )
  }
}
