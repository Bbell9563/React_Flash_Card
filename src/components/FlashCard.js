import React from 'react'
import { Card } from 'semantic-ui-react'

const Contact = ({ question, answer, id }) => {
  return (
    <div>

      <Card>
        <Card.Content className="flashcard" onClick={() => { showAnswer(answer, question) }}>
        {question}
        </Card.Content>
      </Card>
    </div>
  )
}

function showAnswer(answer, question) {
  return (
    <div>
      <h1 onClick={() => { showQuestion(answer, question) }}>{answer}</h1>
    </div>
  )
}

function showQuestion(answer, question) {
  return (
    <div>
      <h1 onClick={() => { showAnswer(answer, question) }}>{question}</h1>
    </div>
  )
}

export default Contact
