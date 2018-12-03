import React from 'react';
import { Parallax } from 'react-parallax';

const Parallax1 = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/balloon.JPG')}
            bgImageAlt='the cat'
            strength={200}
        >
        <h1>Evan Apodaca</h1>
            Put some text content here - even an empty div with fixed dimensions to have a height for the parallax.
            <div style={{ width: '90vw', height: '90vh' }} />
            
        </Parallax>
    <div className='p2'></div>
    <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/yellow.jpeg')}
            bgImageAlt='the cat'
            strength={200}
        >
        <h1>Evan Apodaca</h1>
            Put some text content here - even an empty div with fixed dimensions to have a height for the parallax.
            <div style={{ width: '90vw', height: '90vh' }} />
            
        </Parallax>
    <div className='p2'></div>
        {/* -----dynamic blur-----*/}
        {/* <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./images/balloon.JPG')}
            bgImageAlt='the dog'
            strength={200}
        >
            Blur transition from min to max
            <div style={{ height: '200px' }} />
        </Parallax> */}
    </div>
);
export default Parallax1;
