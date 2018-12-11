import React, { Component } from 'react';
import './App.css';
import Portfolio from './Portfolio.js';
import About from './about';
import Music from './music';
import Contact from './contact';
import Blank from './blank';
import { Menu } from 'semantic-ui-react';
// import { Howl, Howler } from 'howler';

class App extends Component {
    state = {
        showAbout: true,
        showPort: true,
        showMusic: true,
        showContact: true,
        showBlank: false
    };

    toggleHome() {
        this.setState({
            showAbout: true,
            showPort: true,
            showMusic: true,
            showContact: true,
            showBlank: false
        });
    }

    toggleAbout() {
        this.setState({
            showAbout: false,
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
            showMusic: false,
            showContact: true,
            showBlank: true
        });
    }

    toggleContact() {
        this.setState({
            showAbout: true,
            showPort: true,
            showMusic: true,
            showContact: false,
            showBlank: true
        });
    }

    render() {
        return (
            <div className='App'>
                <div className='nav'>
                    <Menu className='menu' inverted vertical>
                        <Menu.Item className='name' name='Evan Apodaca' />
                        <Menu.Item name='Home' onClick={this.toggleHome.bind(this)} />
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
