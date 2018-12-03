import React, { Component } from 'react';
import './App.css';
import Parallax1 from './Parallax.js';

class App extends Component {
    render() {
        return (
            <div className='App'>
                <div className='nav'>
                    <h1>Evan Apodaca</h1>
                </div>
                <div className='content'>
                    <Parallax1 />
                </div>
            </div>
        );
    }
}

export default App;
