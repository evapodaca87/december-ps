import React from 'react';
import { Parallax } from 'react-parallax';

const Portfolio = () => (
    <div className='portfolio'>
        {/* -----basic config-----*/}
        <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/rick.jpg')}
            bgImageAlt='the cat'
            strength={60}
        >
            <p className='onPic'>Hello this is filler text yo</p>
            <div style={{ width: '90vw', height: '90vh' }} />
        </Parallax>
        <div className='p2' />
        <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/boom.jpg')}
            bgImageAlt='the cat'
            strength={60}
        >
            <p className='onPic'>Hello this is filler text yo</p>
            <div style={{ width: '90vw', height: '90vh' }} />
        </Parallax>
        <div className='p2' />
        <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/email.jpg')}
            bgImageAlt='the cat'
            strength={60}
        >
            <p className='onPic'>Hello this is filler text yo</p>
            <div style={{ width: '90vw', height: '90vh' }} />
        </Parallax>
        <div className='p2' />
        <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/firstDrum.jpg')}
            bgImageAlt='the cat'
            strength={60}
        >
            <p className='onPic'>Hello this is filler text yo</p>
            <div style={{ width: '90vw', height: '90vh' }} />
        </Parallax>
        <div className='p2' />
        <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/ugly.jpg')}
            bgImageAlt='the cat'
            strength={60}
        >
            <p className='onPic'>Hello this is filler text yo</p>
            <div style={{ width: '90vw', height: '90vh' }} />
        </Parallax>
        <div className='p2' />
        <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/pixel.jpg')}
            bgImageAlt='the cat'
            strength={60}
        >
            <p className='onPic'>Hello this is filler text yo</p>
            <div style={{ width: '90vw', height: '90vh' }} />
        </Parallax>
        <div className='p2' />
        <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/clock.jpg')}
            bgImageAlt='the cat'
            strength={60}
        >
            <p className='onPic'>Hello this is filler text yo</p>
            <div style={{ width: '90vw', height: '90vh' }} />
        </Parallax>
        <div className='p2' />
        <Parallax
            className='parallax1'
            blur={0}
            bgImage={require('./images/calc.jpg')}
            bgImageAlt='the cat'
            strength={60}
        >
            <p className='onPic'>Hello this is filler text yo</p>
            <div style={{ width: '90vw', height: '90vh' }} />
        </Parallax>
        <div className='p2' />
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
export default Portfolio;
