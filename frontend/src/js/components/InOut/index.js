import React from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'
import Instructions from './instructions.js'
import CategoryBar from './categorybar.js'
import Answer from '../Answer/index.js'

export default class InOut extends React.Component {
  constructor () {
    super()
    this.state = { side: 'NONE', activeCategories: [], answers: [] }
    this.changeSide = this.changeSide.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
  }

  changeSide (selectedSide) {
    this.setState({
      side: selectedSide,
      answers: this.props.answers.filter((answer) => {
        return answer.side === selectedSide
      }).sort((a, b) => {
        return b.score - a.score
      })
    })
  }

  showSide () {
    if (this.state.side === 'NONE') {
      return <Instructions />
    } else {
      return (
        <div>
          <p>arguments for stayin out the EU</p>
          {this.state.answers.map((answer) => {
            return (
              <Answer key={answer.id} answerObj={answer} upVoteFunc={this.props.upVoteFunc.bind(null, answer.id)} allComments={true} />
            )
          })}
        </div>
      )
    }
  }

  selectCategory (category) {
    if (this.state.activeCategories.indexOf(category) > -1) {
      const categories = this.state.activeCategories.filter((el) => {
        return el !== category
      })
      const answers = this.props.answers.filter((answer) => {
        return answer.tags.indexOf(category) > -1 && this.state.side === answer.side
      })
      this.setState({ activeCategories: categories,
                      answers: answers})
    } else {
      const categories = this.state.activeCategories.concat([category])
      const answers = this.props.answers.filter((answer) => {
        return answer.tags.indexOf(category) > -1 && this.state.side === answer.side
      })
      this.setState({ activeCategories: categories,
                      answers: answers})
    }
  }

  render () {
    console.log(this.state)
    return (
      <div style={{'textAlign': 'center'}}>
        <Jumbotron>
          <Grid>
            <Row>
              <Col xs={6}>
                <div onClick={() => { this.changeSide('in') }}>IN</div>
              </Col>
              <Col xs={6}>
                <div onClick={() => { this.changeSide('out') }}>OUT</div>
              </Col>
            </Row>
          </Grid>
        </Jumbotron>
        <CategoryBar selectCategory={this.selectCategory} categories={this.state.activeCategories} />
        <Row>
         {this.showSide()}
        </Row>
      </div>
    )
  }
}
