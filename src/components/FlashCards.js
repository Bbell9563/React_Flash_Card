import React from 'react'
import FlashCard from './FlashCard'
import { Card } from 'semantic-ui-react'


const FlashCards = (props) => (
  <div>
    <Card.Group itemsPerRow={4}>
      {props.flashcards.map(card => (

        <FlashCard
          key={`card-${card.id}`}
          {...card}
        />

      ))}
    </Card.Group>

  </div>
)

export default FlashCards