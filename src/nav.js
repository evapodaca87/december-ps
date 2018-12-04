import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class Nav extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted pointing vertical>
        <Menu.Item className="name" name='Evan Apodaca' />
        <Menu.Item name='Home' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name='About'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Portfolio'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Music'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Contact'
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
