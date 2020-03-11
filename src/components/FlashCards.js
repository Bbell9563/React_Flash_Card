import React from 'react'
import FlashCard from './FlashCard'


const FlashCards = (props) => (
  <div>
    {props.flashcards.map(card => (
      <FlashCard 
        key = {`card-${card.id}`}
        {...card}
      />
    ))}

  </div>
)

export default FlashCards