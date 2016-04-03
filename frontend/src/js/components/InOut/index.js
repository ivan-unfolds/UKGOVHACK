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
      })
    })
  }

  showSide () {
    if (this.state.side === 'NONE') {
      return <Instructions />
    } else if (this.state.side === 'IN') {
      return (
        <div>
          <p>arguments for stayin in the EU</p>
          <Answer />
          <Answer />
        </div>
        )
    } else {
      return (
        <div>
          <p>arguments for stayin out the EU</p>
          {this.state.answers.map((answer) => {
            return (
              <Answer key={answer.id} answerObj={answer} upVoteFunc={() => { console.log('upvoted') }} allComments={true} />
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
      this.setState({ activeCategories: categories })
    } else {
      const categories = this.state.activeCategories.concat([category])
      this.setState({ activeCategories: categories })
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
