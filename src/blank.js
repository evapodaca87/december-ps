import React from 'react';
import { Parallax } from 'react-parallax';
import './images/inflated.JPG';

const Blank = () => (
    <div className='blank'>
        
        <div className='home'>
        <h1 className="info">Evan Apodaca</h1>
        {/* -----basic config-----*/}
        <Parallax
            className='parallax2'
            blur={0}
            bgImage={require('./images/inflated.JPG')}
            bgImageAlt='the cat'
            strength={60}
        >
            
            <div style={{ width: '90vw', height: '90vh' }} />
        </Parallax>
        <div className='p2' />
    </div>

    
       
    </div>
);
export default Blank;