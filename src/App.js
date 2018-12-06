import React, { Component } from 'react';
import './App.css';
import Portfolio from './Portfolio.js';
import About from './about';
import Music from './music';
import Contact from './contact';
import Blank from './blank';
import { Menu } from 'semantic-ui-react';

class App extends Component {
    state = {
        showAbout: true,
        showPort: true,
        showMusic: true,
        showContact: true,
        showBlank: false
    };

    toggleAbout() {
        this.setState({
            showAbout: !this.state.showAbout,
            showPort: true,
            showMusic: true,
            showContact: true,
            showBlank: true
        });
    }

    togglePort() {
        this.setState({
            showAbout: true,
            showPort: false,
            showMusic: true,
            showContact: true,
            showBlank: true
        });
    }

    toggleMusic() {
        this.setState({
            showAbout: true,
            showPort: true,
            showMusic: !this.state.showMusic,
            showContact: true,
            showBlank: !this.state.showBlank
        });
    }

    toggleContact() {
        this.setState({
            showAbout: true,
            showPort: true,
            showMusic: true,
            showContact: !this.state.showContact,
            showBlank: !this.state.showBlank
        });
    }

    render() {
        return (
            <div className='App'>
                <div className='nav'>
                    <Menu inverted pointing vertical>
                        <Menu.Item className='name' name='Evan Apodaca' />
                        <Menu.Item name='Home' />
                        {/* // active={activeItem === 'home'} */}
                        <Menu.Item
                            name='About'
                            // active={activeItem === 'messages'}
                            onClick={this.toggleAbout.bind(this)}
                        />
                        <Menu.Item
                            name='Portfolio'
                            // active={activeItem === 'friends'}
                            onClick={this.togglePort.bind(this)}
                        />
                        <Menu.Item
                            name='Music'
                            // active={activeItem === 'friends'}
                            onClick={this.toggleMusic.bind(this)}
                        />
                        <Menu.Item
                            name='Contact'
                            // active={activeItem === 'friends'}
                            onClick={this.toggleContact.bind(this)}
                        />
                    </Menu>
                </div>
                <div className='content'>
                    {!this.state.showAbout && <About />}
                    {!this.state.showPort && <Portfolio />}
                    {!this.state.showMusic && <Music />}
                    {!this.state.showContact && <Contact />}
                    {!this.state.showBlank && <Blank />}
                </div>
            </div>
        );
    }
}

export default App;
