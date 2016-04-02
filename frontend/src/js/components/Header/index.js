import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router'

export default class Header extends React.Component {
  constructor () {
    super()
    this.state = { menuOpen: false }
  }

  render () {
    console.log(this.props)
    return (
      <div>
        <Navbar
          expanded={this.state.menuOpen}
          onToggle={() => { this.setState({ menuOpen: !this.state.menuOpen }) }}
          className='top-menu'
          fixedTop={true}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to={'/'}>
                <img src={this.props.logoUrl}></img>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse pullRight>
            <Nav pullRight>
              {this.props.menuItems.map(item => {
                return (
                  <li onClick={() => { this.setState({ menuOpen: false }) }}
                    role='presentation'
                    key={item + '-li'}>
                    <Link key={item} to={'/' + item}>{item}</Link>
                  </li>
                )
              })}
            </Nav>
          </Navbar.Collapse>
          <p style={{color: 'yellow'}} className='user-logged-in'>{this.props.auth ? 'Welcome ' + this.props.userDetails.screenName + ', share your opinion' : ''}</p>
        </Navbar>
      </div>
    )
  }
}
