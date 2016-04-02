import React from 'react'
import { Button } from 'react-bootstrap'

export default class CategoryBar extends React.Component {
  styleToggle (category, categories) {
    if (categories.indexOf(category) > -1) {
      return 'info'
    } else {
      return 'default'
    }
  }
  render () {
    const style = {
      display: 'inline-block'
    }
    return (
      <div>
        <ul>
          <li style={style}>
            <Button onClick={() => {this.props.selectCategory('immigration')}} bsStyle={this.styleToggle('immigration', this.props.categories)}>Immigration</Button>
          </li>
          <li style={style}>
            <Button onClick={this.props.selectCategory.bind(null, 'freedom of movement')} bsStyle={this.styleToggle('freedom of movement', this.props.categories)}>Freedom of Movement</Button>
          </li>
        </ul>
      </div>
    )
  }
}
