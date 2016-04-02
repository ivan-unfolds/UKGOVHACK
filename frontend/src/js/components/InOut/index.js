import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default class InOut extends React.Component {
  constructor () {
    super()
    this.state = { side: 'IN' }
    this.changeSide = this.changeSide.bind(this)
  }

  changeSide (side) {
    this.setState({ side: side })
  }

  showSide () {
    if (this.state.side === 'IN') {
      return <p>arguments for stayin in the EU</p>
    } else {
      return <p>arguments for stayin out the EU</p>
    }
  }

  render () {
    return (
      <Grid>
        <Row>
          <Col xs={6}>
            <div onClick={() => { this.changeSide('IN') }}>IN</div>
          </Col>
          <Col xs={6}>
            <div onClick={() => { this.changeSide('OUT') }}>OUT</div>
          </Col>
        </Row>
        <Row>
         {this.showSide()}
        </Row>
      </Grid>
    )
  }
}
