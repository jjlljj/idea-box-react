import React, {  Component } from 'react'
import './styles/IdeaCards.scss'
import Card from './Card.js'

export default class IdeaCards extends Component {

  render() {
    return (
      <div className='cards-container'>
        {
          this.props.cards &&
          this.props.cards.map((ideaCard, idx) => {
            return <Card card={ideaCard} key={idx}/>
          })
        }
      </div>
    )
  }
}

