import React from 'react';
import { Parallax } from 'react-parallax';
import all3 from './images/all3.png';
import react from './images/react.png';
import node2 from './images/node2.png';
import sql from './images/sql.svg';
import angular from './images/Angular.svg';
import knex from './images/knex.png';
import router from './images/router.png';
import post from './images/postgre.png';
import './App.css';

const Portfolio = () => (
    <div>
        <div className='portfolio'>
            <h1 className='big'>Portfolio</h1>
            <h2>Tech</h2>
            <img className='techLogo' src={all3} />
            <img className='techLogo' src={react} />
            <img className='techLogo' src={router} />
            <img className='techLogo' src={angular} />
            <img className='techLogo' src={node2} />
            <img className='techLogo' src={sql} />
            <img className='techLogo' src={post} />
            <img className='techLogo' src={knex} />

            <h2>Projects</h2>
            {/* -----basic config-----*/}

            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/inflatedsite.png')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='http://inflated-penguins.surge.sh/'>
                    <div className='space1' />
                    <h1 className='onPic1'>Inflated Penguins Music Site</h1>
                    <div className='space2' />
                    <ul className='onPic'>
                        <h2>Tech Used:</h2>
                        <li className='onPicLI'>React</li>
                        <li className='onPicLI'>Semantic UI React</li>
                        <li className='onPicLI'>Howler.js</li>
                        <li className='onPicLI'>JavaScript</li>
                        <li className='onPicLI'>JSX & CSS</li>
                    </ul>
                    <div style={{ width: '90vw', height: '90vh' }} />
                </a>
            </Parallax>

            <div className='p2' />

            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/rick.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='http://rick-morty-library-daca.surge.sh/'>
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
                </a>
            </Parallax>

            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/boom.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='http://tap-tap-boom.surge.sh/'>
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
                </a>
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/gitlit.png')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='https://git-lit.surge.sh/'>
                    <div className='space1' />
                    <h1 className='onPic1'>Git-Lit Bar Finder</h1>
                    <div className='space2' />
                    <ul className='onPic'>
                        <h2>Tech Used:</h2>
                        <li className='onPicLI'>React</li>
                        <li className='onPicLI'>Semantic UI React</li>
                        <li className='onPicLI'>Google Map API</li>
                        <li className='onPicLI'>Node.js</li>
                        <li className='onPicLI'>Express w/Knex</li>
                        <li className='onPicLI'>JavaScript</li>
                        <li className='onPicLI'>JSX & CSS</li>
                    </ul>
                    <div style={{ width: '90vw', height: '90vh' }} />
                </a>
            </Parallax>

            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/email.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='http://grandiose-muscle.surge.sh'>
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
                </a>
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/firstDrum.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='https://first-drumkit-daca.surge.sh/'>
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
                </a>
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/ugly.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='http://imported-elbow.surge.sh/'>
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
                </a>
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/pixel.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='http://pretty-in-pixels.surge.sh'>
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
                </a>
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/clock.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='http://simple-clock.surge.sh/'>
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
                </a>
            </Parallax>
            <div className='p2' />
            <Parallax
                className='parallax1'
                blur={0}
                bgImage={require('./images/calc.jpg')}
                bgImageAlt='the cat'
                strength={100}
            >
                <a href='http://dumb-math.surge.sh'>
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
                </a>{' '}
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
