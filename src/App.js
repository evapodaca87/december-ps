import React, { Component } from 'react';
import './App.css';
import Portfolio from './Portfolio.js';
import Nav from './nav';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='nav'>
                    <Nav />
                </div>
                <div className='content'>
                    <Portfolio />
                </div>
            </div>
        );
    }
}

export default App;
