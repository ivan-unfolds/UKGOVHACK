import React from 'react'
import InOut from '../InOut/index.js'
import axios from 'axios'

export default class Home extends React.Component {

  constructor () {
    super()
    this.state = {
      answers: []
    }
  }

  upVoteFunc (answerID) {
    this.state.answers.filter((answer) => {
      console.log('FILTERING ANSWeR: ', answer)
      return answer.id === answerID
    })[0].score++
    this.setState(this.state)
    axios.get('/changeScore/' + answerID).then((response) => {
      console.log('SUCCESSS', response)
    })
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
    console.log('STATE ANSWERS: ', this.state.answers)
    return (
      <InOut />
    )
  }
}
