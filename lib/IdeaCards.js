import React, {  Component } from 'react'
import './styles/IdeaCards.scss'
import Card from './Card.js'

export default class IdeaCards extends Component {

  render() {
    return (
      <div className='cards-container'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    )
  }
}

