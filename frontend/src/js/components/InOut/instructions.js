import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

export default class Instructions extends React.Component {
  render () {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
          Welcome to the UKGOVHACK EU Referundum app. Begin by either clicking
          on IN or OUT to see what people really think about it.
          </Col>
        </Row>
      </Grid>
    )
  }
}
