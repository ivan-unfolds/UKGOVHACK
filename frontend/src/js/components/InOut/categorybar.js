import React from 'react'
import { Button } from 'react-bootstrap'

const categories = ['Immigration', 'Freedom of Movement', 'Health', 'Economy']

export default class CategoryBar extends React.Component {
  styleToggle (category, categories) {
    if (categories.indexOf(category) > -1) {
      return 'primary'
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
          {categories.map(category => {
            return (
              <li style={style}>
                <Button
                  onClick={() => { this.props.selectCategory(category)}}
                  bsStyle={this.styleToggle(category, this.props.categories)}
                  key={category}>{category}</Button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
