import React from 'react'
import { Button } from 'react-bootstrap'

export default class CategoryBar extends React.Component {
  render () {
    const style = {
      display: 'inline-block'
    }
    return (
      <div>
        <ul>
          <li style={style}>
            <Button onClick={() => {this.props.selectCategory('immigration')}} bsStyle='info'>Immigration</Button>
          </li>
          <li style={style}>
            <Button onClick={this.props.selectCategory.bind(null, 'freedom of movement')} bsStyle='info'>Freedom of Movement</Button>
          </li>
        </ul>
      </div>
    )
  }
}
