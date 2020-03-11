import React from 'react'
import FlashCards from './FlashCards'
import FlashCardForm from './FlashCardForm'


class FlashCardShow extends React.Component {
  state = {
    flashcards: [
      {id: 0, markedWrong: false, question: "What does pass by reference mean", answer:"Passing the same object in memory"},
      {id: 1, markedWrong: false, question: "What does pass by value mean", answer:"Passing a copy of an object"},
      {id: 2, markedWrong: false, question: "How should you change the state", answer:"By using this.setState()"},
      {id: 3, markedWrong: false, question: "What are props", answer:"Things that you cant change, read only"},
    ],
    showForm: true,
    showAnswer: false,
  }

  addCard = (card) => {
    const {flashcards} = this.state
    const cardId = flashcards.length +1 
    const newCards = [{...flashcards[0], ...card, id:cardId}]
    this.setState({
      flashcards:newCards
    })
  }

  deleteCard = (id) => {
    const {flashcards} = this.state
    const newCards = flashcards.filter(card => card.id !== id)
    this.setState({
      flashcards:newCards
    })
  }

  render(){
    return(
    <div>
      <FlashCardForm />
      <FlashCards flashcards={this.state.flashcards}/>
    </div>
    )}
}

export default FlashCardShow