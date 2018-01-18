import React, {  Component } from 'react'
import IdeaForm from './IdeaForm.js'
import IdeaCards from './IdeaCards.js'
import './styles/App.scss'


class App extends Component {
  constructor() {
    super()
    this.state = {
      cards: []
    }

    this.addIdeaCard = this.addIdeaCard.bind(this)
    this.deleteCard = this.deleteCard.bind(this)
    this.upvoteCard = this.upvoteCard.bind(this)
    this.downvoteCard = this.downvoteCard.bind(this)
  }

  componentDidMount() {
    this.fromStorage()
  }

  addIdeaCard(card) {
    let cardsArray = this.state.cards
    cardsArray.push(card)  
    this.setState({cards: cardsArray})
    this.toStorage(cardsArray)
  }

  toStorage(array) {
    localStorage.setItem('ideaCards', JSON.stringify(array))
  }

  fromStorage() {
    let cardsArray = JSON.parse(localStorage.getItem('ideaCards'))
    this.setState({cards: cardsArray})
  }

  deleteCard(id) {
    let cardsArray = this.state.cards.filter(card => card.id !== id)
    this.setState({cards: cardsArray})
    this.toStorage(cardsArray)
  }

  upvoteCard(id) {
    const qualityArray = ['swill', 'okay', 'quality']
    let cardsArray = this.state.cards
    let card = cardsArray.find(ideaCard => ideaCard.id === id)
    let cardIdx = cardsArray.findIndex(ideaCard => ideaCard === card)
    let qualityIdx = qualityArray.indexOf(card.quality)

    if (qualityIdx < qualityArray.length-1) qualityIdx++

    card.quality = qualityArray[qualityIdx]
    cardsArray[cardIdx] = card

    this.setState({cards: cardsArray})
    this.toStorage(cardsArray)
  }

  downvoteCard(id) {
    const qualityArray = ['swill', 'okay', 'quality']
    let cardsArray = this.state.cards
    let card = cardsArray.find(ideaCard => ideaCard.id === id)
    let cardIdx = cardsArray.findIndex(ideaCard => ideaCard === card)
    let qualityIdx = qualityArray.indexOf(card.quality)
    
    if (qualityIdx > 0) qualityIdx--

    card.quality = qualityArray[qualityIdx]
    cardsArray[cardIdx] = card
  
    this.setState({cards: cardsArray})
    this.toStorage(cardsArray)
  }

  render() {
    return ( 
      <div className="main-container">
        <IdeaForm addIdeaCard = {this.addIdeaCard}/>
        <IdeaCards 
          cards={this.state.cards} 
          deleteCard={this.deleteCard}
          upvoteCard={this.upvoteCard}
          downvoteCard={this.downvoteCard}
        />
      </div>
    )
  } 
}

export default App