import React from 'react';
import { Parallax } from 'react-parallax';

const Portfolio = () => (
    <div>
        <h1 className='info'>Portfolio</h1>
        <div className='portfolio'>
            {/* -----basic config-----*/}
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/rick.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <div className='space1' />
                <h1 className='onPic1'>Rick & Morty Character Library</h1>
                <div className='space2' />
                <ul className='onPic'>
                    <h2>Tech Used:</h2>
                    <li className='onPicLI'>React</li>
                    <li className='onPicLI'>Semantic UI React</li>
                    <li className='onPicLI'>RESTful API</li>
                    <li className='onPicLI'>JavaScript</li>
                    <li className='onPicLI'>JSX & CSS</li>
                </ul>
                <div style={{ width: '90vw', height: '90vh' }} />
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/boom.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <div className='space1' />
                <h1 className='onPic1'>Tap Tap BOOM</h1>
                <div className='space2' />
                <ul className='onPic'>
                    <h2>Tech Used:</h2>
                    <li className='onPicLI'>Paper.js</li>
                    <li className='onPicLI'>Howler.js</li>
                    <li className='onPicLI'>HTML</li>
                    <li className='onPicLI'>JavaScript</li>
                    <li className='onPicLI'>CSS</li>
                </ul>
                <div style={{ width: '90vw', height: '90vh' }} />
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/email.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <div className='space1' />
                <h1 className='onPic1'>Inbox</h1>
                <div className='space2' />
                <ul className='onPic'>
                    <h2>Tech Used:</h2>
                    <li className='onPicLI'>React</li>
                    <li className='onPicLI'>Bootstrap</li>
                    <li className='onPicLI'>JSX</li>
                    <li className='onPicLI'>JavaScript</li>
                    <li className='onPicLI'>CSS</li>
                </ul>
                <div style={{ width: '90vw', height: '90vh' }} />
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/firstDrum.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <div className='space1' />
                <h1 className='onPic1'>My first DrumKit</h1>
                <div className='space2' />
                <ul className='onPic'>
                    <h2>Tech Used:</h2>
                    <li className='onPicLI'>HTML</li>
                    <li className='onPicLI'>CSS</li>
                    <li className='onPicLI'>JavaScript</li>
                </ul>
                <div style={{ width: '90vw', height: '90vh' }} />
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/ugly.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <div className='space1' />
                <h1 className='onPic1'>Shopping Cart</h1>
                <div className='space2' />
                <ul className='onPic'>
                    <h2>Tech Used:</h2>
                    <li className='onPicLI'>React</li>
                    <li className='onPicLI'>Bootstrap</li>
                    <li className='onPicLI'>JSX</li>
                    <li className='onPicLI'>JavaScript</li>
                    <li className='onPicLI'>CSS</li>
                </ul>
                <div style={{ width: '90vw', height: '90vh' }} />
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/pixel.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <div className='space1' />
                <h1 className='onPic1'>Pixel Art</h1>
                <div className='space2' />
                <ul className='onPic'>
                    <h2>Tech Used:</h2>
                    <li className='onPicLI'>Bootstrap</li>
                    <li className='onPicLI'>HTML</li>
                    <li className='onPicLI'>JavaScript</li>
                    <li className='onPicLI'>CSS</li>
                </ul>
                <div style={{ width: '90vw', height: '90vh' }} />
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/clock.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <div className='space1' />
                <h1 className='onPic1'>CSS Clock</h1>
                <div className='space2' />
                <ul className='onPic'>
                    <h2>Tech Used:</h2>
                    <li className='onPicLI'>HTML</li>
                    <li className='onPicLI'>JavaScript</li>
                    <li className='onPicLI'>CSS</li>
                </ul>
                <div style={{ width: '90vw', height: '90vh' }} />
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/calc.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <div className='space1' />
                <h1 className='onPic1'>Calculator</h1>
                <div className='space2' />
                <ul className='onPic'>
                    <h2>Tech Used:</h2>
                    <li className='onPicLI'>Bootstrap</li>
                    <li className='onPicLI'>HTML</li>
                    <li className='onPicLI'>JavaScript</li>
                    <li className='onPicLI'>CSS</li>
                </ul>
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
    </div>
);
export default Portfolio;
