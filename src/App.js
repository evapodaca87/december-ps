import React, { Component } from 'react';
import './App.css';
import Parallax1 from './Parallax.js';
import { Menu } from 'semantic-ui-react';
import Menu1 from './nav';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='nav'>
                    <h1>Evan Apodaca</h1>
                    <Menu1 />
                </div>
                <div className='content'>
                    <Parallax1 />
                </div>
            </div>
        );
    }
}

export default App;
