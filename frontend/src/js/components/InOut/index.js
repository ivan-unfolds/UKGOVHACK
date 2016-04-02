import React from 'react'
import { Grid, Row, Col, Jumbotron } from 'react-bootstrap'
import Instructions from './instructions.js'
import CategoryBar from './categorybar.js'

export default class InOut extends React.Component {
  constructor () {
    super()
    this.state = { side: 'NONE', activeCategories: [] }
    this.changeSide = this.changeSide.bind(this)
    this.selectCategory = this.selectCategory.bind(this)
  }

  changeSide (side) {
    this.setState({ side: side })
  }

  showSide () {
    if (this.state.side === 'NONE') {
      return <Instructions />
    } else if (this.state.side === 'IN') {
      return <p>arguments for stayin in the EU</p>
    } else {
      return <p>arguments for stayin out the EU</p>
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
                <div onClick={() => { this.changeSide('IN') }}>IN</div>
              </Col>
              <Col xs={6}>
                <div onClick={() => { this.changeSide('OUT') }}>OUT</div>
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
