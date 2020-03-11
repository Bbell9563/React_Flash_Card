import React from 'react'
import { Button, Form } from 'semantic-ui-react'

class FlashCardForm extends React.Component {
  state = {
    question: '',
    answer: '',
  }

  handleSubmit = () => {
    this.props.addCard(this.state)
    this.setState({
      question: '',
      answer: '',
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Input
            name="question"
            label="Question"
            placeholder="Question"
            value={this.state.question}
            onChange={this.handleChange}
          />
          <Form.Input
            name="answer"
            label="Answer"
            placeholder='Answer'
            value={this.state.answer}
            onChange={this.handleChange}
          />

          <Button type='submit'>Submit</Button>
        </Form.Group>
      </Form >
    )
  }

}

export default FlashCardForm
