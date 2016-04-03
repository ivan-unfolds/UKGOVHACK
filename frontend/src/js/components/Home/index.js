import React from 'react'
import InOut from '../InOut/index.js'

export default class Home extends React.Component {

  constructor () {
    super()
    this.state = {
      answers: []
    }
  }

  checkCookie () {
    return document.cookie.indexOf('reactCookie') > -1
  }

  componentDidMount () {
    const xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.addEventListener('load', (response) => {
      const rawAnswers = response.target.response
      this.setState({
        answers: JSON.parse(rawAnswers).map((answer) => {
          answer.comments = JSON.parse(answer.comments)
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
      <InOut answers={this.state.answers} />
    )
  }
}
