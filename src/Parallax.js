import React from 'react';
import { Parallax, Background } from 'react-parallax';
 
const Parallax1 = () => (
    <div>
        {/* -----basic config-----*/}
        <Parallax
            blur={0}
            bgImage={require('./images/balloon.JPG')}
            bgImageAlt="the cat"
            strength={400}
        >
            Put some text content here - even an empty div with fixed dimensions to have a height
            for the parallax.
            <div style={{ height: '100vh' }} />
        </Parallax>
 
        {/* -----dynamic blur-----*/}
        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={require('./images/yellow.jpeg')}
            bgImageAlt="the dog"
            strength={200}
        >
            Blur transition from min to max
            <div style={{ height: '200px' }} />
        </Parallax>
        
 
        {/* -----renderProp: "renderLayer"-----*/}
        <Parallax
            bgImage={'./images/yellow.jpeg'}
            strength={400}
            renderLayer={percentage => (
                <div
                    style={{
                        position: 'absolute',
                        background: `rgba(255, 125, 0, ${percentage * 1})`,
                        left: '50%',
                        top: '50%',
                        width: percentage * 500,
                        height: percentage * 500,
                    }}
                />
            )}
        >
            <p>... Content</p>
        </Parallax>
    </div>
);
export default Parallax1;