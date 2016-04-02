import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'

const styles = {
  textAlign: 'center',
  margin: '4em auto'
}

export default (props) => {
  return (
    <Grid style={styles}>
      <Row>
        <Col xs={12}>
          <form method='post' id='newAnswer'>
            <h3>Write Your New Answer Below</h3>
            <input type='radio' name='side' value='in' required />IN<br/>
            <input type='radio' name='side' value='in' required />OUT<br/>
            Title: <input type='text' name='title' placeholder='Title' required />
            <textarea form='newAnswer' name='answer' rows='4' cols='50' placeholder='Your answer here' required>
            </textarea>
            <p>Please select one of the following tags:</p>
            <input type='checkbox' name='tags' value='economy' />Economy<br/>
            <input type='checkbox' name='tags' value='employment' />Employment<br/>
            <input type='checkbox' name='tags' value='immigration' />Immigration<br/>
            <input type='submit'/>
          </form>
        </Col>
      </Row>
    </Grid>
  )
}
