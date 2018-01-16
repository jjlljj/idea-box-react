import React, { Component } from 'react'
import './styles/Card.scss'


export default class Card extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    let { id, title, body, quality } = this.props.card
    return (
      <div className="idea-card" id={id}>
        <h1>{title}</h1>
        <p>{body}</p>
        <p>{quality}</p>
      </div>
    )
  }
}

