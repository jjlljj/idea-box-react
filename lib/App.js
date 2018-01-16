import React, {  Component } from 'react'
import IdeaForm from './IdeaForm.js'
import IdeaCards from './IdeaCards.js'
import './styles/App.scss'


class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }


  render() {
    return (
      <div className="main-container">
        <IdeaForm />
        <IdeaCards />
      </div>
    )
  } 
}

export default App