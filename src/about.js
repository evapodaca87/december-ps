import React from 'react';
import { Parallax } from 'react-parallax';

const About = () => (
    <div className='blank'>
        <h1 className='info'>Evan Apodaca</h1>
        <div className='home1'>
            {/* -----basic config-----*/}

            <div className='about'>
                <p>
                    Hi! I’m Evan. I’m a veteran working to become an audio software engineer. with a background in Music
                    Production. I also have an 6 year history in management in the grocery industry, though most
                    recently, I worked for the US government.
                </p>
                <p>
                    Years ago, I was a Sonar Technician in the Navy, where I spent a lot of time staring at computer
                    screens, but it gave me the discipline and motivation needed to keep pursuing my dreams. It also
                    gave me thorough experience with sound, audio systems, sound waves, and sonar that is unmatched in
                    the civilian, non-military world.
                </p>
                <p>
                    I've started programming through the Web Development immersive at Galvanize in Denver, CO. where I
                    acquired the skills to teach myself any programming language.
                </p>
                <p>
                    I have been completely obsessed with music for as long as I can remember, so in my spare time, I
                    like to make music on the computer, go to live shows, or teach myself new ways to create. Teaching
                    myself to produce music has been the most challenging and rewarding experience of my life. Through
                    this, I have acquired knowledge of music theory, DAWs, VSTs, MIDI, sampling, music history and so
                    much more. Ultimately, I would like to create audio production software for fellow producers to use
                    and hopefully make it easier for new people to learn. However, I would be extremely happy working on
                    any development project that incorporates audio.
                </p>
                <p>
                    I also enjoy hiking with my dog on the weekends, hanging out with friends, and every few weeks, I
                    jump out of a plane. Skydiving has become another love of mine.
                </p>
                <p>
                    I am a Colorado native, and while I do love it here in the Denver area, I am open to relocating to
                    anywhere in the world to achieve my dreams. I want to work for a company I believe in, no matter how
                    small the project, or where they are located.
                </p>
            </div>
            <Parallax
                className='parallax5'
                blur={0}
                bgImage={require('./images/me.JPG')}
                bgImageAlt='the cat'
                strength={200}
            >
                <div style={{ width: '90vw', height: '90vh' }} />
            </Parallax>
        </div>
    </div>
);
export default About;
