import React from 'react'
import InOut from '../InOut/index.js'
import { Jumbotron } from 'react-bootstrap'

export default (props) => {
  return (
    <Jumbotron className='home'>
      <InOut />
    </Jumbotron>
  )
}
