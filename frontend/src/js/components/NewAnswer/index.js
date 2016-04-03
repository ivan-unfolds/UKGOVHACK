import React from 'react'
import { Grid, Row, Col } from 'react-bootstrap'
import axios from 'axios'

const styles = {
  textAlign: 'center',
  margin: '4em auto',
  label: {
    width: '170px',
    margin: '4px',
    backgroundColor: '#EFEFEF',
    borderRadius: '4px',
    border: '1px solid #D0D0D0',
    overflow: 'auto'
  },
  span: {
    padding: '0 1em'
  }
}

export default class NewAnswer extends React.Component { 
  constructor () {
    super()
    this.state = {
      userDetails: ''
    }
  }

  componentWillMount () {
    if (document.cookie.indexOf('reactCookie') > -1) {
      axios.get('/user-details').then((response) => {
        this.setState({
          userDetails: response.data
        })
        console.log(response.data)
      })
    }
  }

  render () {
    return (
      <Grid style={styles}>
        <Row>
          <Col xs={12}>
            <form method='post' id='newAnswer'>
              <input style={{display: 'none'}} type='text' name='username' value={this.state.userDetails.screenName} required />
              <h3>Write Your New Answer Below</h3>
              <label style={styles.label}><input type='radio' name='side' value='in' required /><span>IN</span></label>
              <label style={styles.label}><input type='radio' name='side' value='out' required /><span>OUT</span></label>
              <br/><input style={{width: '62%'}} type='text' name='title' placeholder='Title' required /><br/>
              <textarea form='newAnswer' name='answer' rows='10' cols='80' placeholder='Your answer here' required>
              </textarea>
              <p>Please select one of the following tags:</p>
              <input type='checkbox' name='tags' value='economy' /><span style={styles.span}>Economy</span>
              <input type='checkbox' name='tags' value='employment' /><span style={styles.span}>Employment</span>
              <input type='checkbox' name='tags' value='immigration' /><span style={styles.span}>Immigration</span>
              <br/><br/><input type='submit'/>
            </form>
          </Col>
        </Row>
      </Grid>
    )
  }
}
