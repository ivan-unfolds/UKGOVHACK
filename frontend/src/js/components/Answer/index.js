import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col, Button } from 'react-bootstrap'

const styles = {
  textAlign: 'center',
  padding: '10px 250px',
  height: {
    height: '15em'
  },
  row: {
    backgroundColor: 'rgb(67, 223, 238)',
    position: 'relative',
    borderRadius: '25px'
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
      margin: '0 auto'
    }
  },
  comment: {
    backgroundColor: '#35b2be',
    border: '1px solid #257c85',
    borderRadius: '5px'
  }
}

class Answer extends React.Component {
  render () {
    const answerObj = this.props.answerObj
    return (
      <Grid style={styles}>
        <Row style={styles.row}>
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
          <p style={styles.tags}><b>Tags:</b> {answerObj.tags.reduce((result, tag) => {
            return result + tag + ', '
          }, '').slice(0, -2)}</p>
        </Row>
        {answerObj.comments.filter((comment, i) => {
          return i < (this.props.allComments ? answerObj.comments.length : 2)
        }).map((comment) => {
          return (
            <Row>
              <Col xs={1} />
              <Col style={styles.comment} xs={10}>
                {comment.text} ---
                <span style={{color: 'blue', textDecoration: 'bold'}}>
                   {comment.username}
                </span>
              </Col>
              <Col xs={1} />
            </Row>
          )
        })}
        {this.props.allComments
          ? '' : <Row>
            <Col xs={1} />
            <Col style={styles.comment} xs={10}>
              <Link to={'answer/' + answerObj.id}>Click here to see the whole discussion...</Link>
            </Col>
            <Col xs={1} />
          </Row>}
      </Grid>
    )
  }
}

Answer.defaultProps = {
  answerObj: {
    id: '1459642947890',
    side: 'in',
    profPic: 'img/twitter.jpg',
    username: 'Mireia',
    score: 572,
    title: 'The title',
    answer: 'I think we should stay in the EU so I do not have to leave',
    tags: ['employment', 'economy', 'immigration'],
    comments: [{
      username: 'Rob',
      text: 'But if we left the EU then you would leave the UK! I think we should leave, personally'
    }, {
      username: 'Katherine',
      text: 'I dont like Mireia, she is mean to me.'
    }, {
      username: 'Tom',
      text: 'I fdsa like Mireia, she is mean to me.'
    }]
  },
  upVoteFunc: () => {
    console.log('up voted')
  },
  allComments: false
}

Answer.propTypes = {
  answerObj: PropTypes.object,
  upVoteFunc: PropTypes.func,
  allComments: PropTypes.bool
}

export default Answer
