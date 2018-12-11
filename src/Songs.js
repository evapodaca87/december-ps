import React from 'react';
// import { Howl, Howler } from 'howler';
const {Howl, Howler} = require('howler');

var sound = new Howl({
    src: [  './Audio/maskoff.mp3', './Audio/y.mp3' ],
    autoplay: true,
    onend: function() {
        console.log('Finished!');
      },
    // loop: true,
    volume: 1,
});
let boom = () => {
    console.log('BOOM');
    sound.play();
};

Howler.volume(1);
const Songs = () => (
    <div className='player'>
        <div className='playButton' onClick={boom}>
            Play A SONG!
        </div>
    </div>
);
export default Songs;
