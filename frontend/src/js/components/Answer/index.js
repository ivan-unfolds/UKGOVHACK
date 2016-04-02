import React, { PropTypes } from 'react'
import { Grid, Row, Col, Button } from 'react-bootstrap'

const styles = {
  textAlign: 'center',
  padding: '10px',
  height: {
    height: '20em'
  },
  bigDiv: {
    backgroundColor: 'rgb(67, 223, 238)',
    position: 'relative'
  },
  tags: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    padding: '0 1em'
  },
  img: {
    outer: {
      width: '80%',
      maxWidth: '400px',
      margin: '2em auto'
    },
    inner: {
      width: '100%'
    }
  }
}

class Answer extends React.Component {
  render () {
    const answerObj = this.props.answerObj
    return (
      <Grid style={styles}>
        <Row style={styles.bigDiv}>
          <Col xs={4}>
            <div style={styles.img.outer}>
              <img style={styles.img.inner} src={answerObj.profPic} />
              <p>{answerObj.username}</p>
            </div>
            <div style={styles.img.outer}>
              <p>{answerObj.score}</p>
              <Button bsStyle='primary' onClick={this.props.upVoteFunc}>Up vote</Button>
            </div>
          </Col>
          <Col xs={8}>
            <div style={styles.height}>
            <h3>{answerObj.title}</h3>
            <p>{answerObj.answer}</p>
            </div>
          </Col>
          <p style={styles.tags}>Tags: {answerObj.tags.reduce((result, tag) => {
            return result + tag + ', '
          }, '').slice(0, -2)}</p>
        </Row>
      </Grid>
    )
  }
}

Answer.defaultProps = {
  answerObj: {
    profPic: 'img/rhino.png',
    username: 'Mireia',
    score: 572,
    title: 'The title',
    answer: 'I think we should stay in the EU so I do not have to leave',
    tags: ['employment', 'economy', 'immigration']
  },
  upVoteFunc: () => {
    console.log('up voted')
  }
}

Answer.propTypes = {
  answerObj: PropTypes.object,
  upVoteFunc: PropTypes.func
}

export default Answer
