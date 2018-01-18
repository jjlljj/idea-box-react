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
        <div>
          <h3>{title}</h3>
          <button onClick={this.handleDelete}> X</button>
        </div>
        <p>{body}</p>

        <div className="quality-container">
          <button 
            className="up-vote"
            onClick={this.handleUpvote}
          >
           &#8593;
          </button>
          <button 
            className="down-vote"
            onClick={this.handleDownvote}
          >
           &#8595;
          </button>

          <p>{quality}</p>
        </div>
      </div>
    )
  }
}

