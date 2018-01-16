import React, { Component } from 'react'
import './styles/Card.scss'


export default class Card extends Component {
  constructor() {
    super()
    this.state = {

    }

    this.handleDelete = this.handleDelete.bind(this)
    this.handleUpvote = this.handleUpvote.bind(this)
    this.handleDownvote = this.handleDownvote.bind(this)
  }

  handleDelete() {
    this.props.deleteCard(this.props.card.id)
  }

  handleUpvote() {
    this.props.upvoteCard(this.props.card.id)
  }

  handleDownvote() {
    this.props.downvoteCard(this.props.card.id)
  }


  render() {
    let { id, title, body, quality } = this.props.card

    return (
      <div className="idea-card" id={id}>
        <h1>{title}</h1>
        <p>{body}</p>

        <p>
          <button 
            className="up-vote"
            onClick={this.handleUpvote}
          >
          Up
          </button>
          <button 
            className="down-vote"
            onClick={this.handleDownvote}
          >
          Down
          </button>

          <span>{quality}</span>
        </p>
        <button onClick={this.handleDelete}>delete</button>
      </div>
    )
  }
}

