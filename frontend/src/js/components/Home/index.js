import React from 'react'
import InOut from '../InOut/index.js'
import { Jumbotron } from 'react-bootstrap'

export default class Home extends React.Component {

  constructor () {
    super()
    this.state = {
      answers: []
    }
  }

  componentDidMount () {
    const xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.addEventListener('load', (response) => {
      this.setState({
        answers: JSON.parse(response.target.response).map((answer) => {
          return {
            ...answer,
            tags: JSON.parse(answer.tags)
          }
        })
      })
    })
    xhr.open('GET', '/getAllAnswers')
    xhr.send()
  }

  render () {
    return (
      <Jumbotron className='home'>
        <InOut />
      </Jumbotron>
    )
  }
}
