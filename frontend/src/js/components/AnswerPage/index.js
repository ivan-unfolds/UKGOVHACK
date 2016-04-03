import React from 'react'
import Answer from '../Answer/index.js'

export default class AnswerPage extends React.Component {
  constructor () {
    super()
    this.state = {
      answerObj: {
        tags: [],
        comments: []
      }
    }
  }
  componentWillMount () {
    const xhr = new XMLHttpRequest() // eslint-disable-line
    xhr.addEventListener('load', (response) => {
      console.log('GOT THE STUFF IN ANSWERPAGE', response.target.response)
      this.state.answerObj = JSON.parse(response.target.response).filter((answer) => {
        return answer.id === this.props.params.answerID
      })[0]
      this.state.answerObj = {
        ...this.state.answerObj,
        tags: JSON.parse(this.state.answerObj.tags),
        comments: JSON.parse(this.state.answerObj.comments)
      }
      this.setState(this.state)
    })
    xhr.open('GET', '/getAllAnswers')
    xhr.send()
  }
  render () {
    console.log(this.props.params.answerID)
    // let answerObj = {
    //   id: '1459642947890',
    //   side: 'in',
    //   profPic: 'img/twitter.jpg',
    //   username: 'Mireia',
    //   score: 572,
    //   title: 'The title',
    //   answer: 'I think we should stay in the EU so I do not have to leave',
    //   tags: ['employment', 'economy', 'immigration'],
    //   comments: [{
    //     username: 'Rob',
    //     text: 'But if we left the EU then you would leave the UK! I think we should leave, personally'
    //   }, {
    //     username: 'Katherine',
    //     text: 'I dont like Mireia, she is mean to me.'
    //   }, {
    //     username: 'Tom',
    //     text: 'I fdsa like Mireia, she is mean to me.'
    //   }]
    // }
   
    console.log('answer obj: ', this.state.answerObj)
    return (
      <Answer
        answerObj={this.state.answerObj}
        upVoteFunc={() => { console.log('up voted') }}
        allComments={true}
      />
    )
  }
}
