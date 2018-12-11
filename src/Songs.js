import React from 'react';
import { Howl, Howler } from 'howler';

var sound = new Howl({
    src: [ 'sound.webm', 'sound.mp3', 'sound.wav' ],
    autoplay: true,
    loop: true,
    volume: 0.5,
    onend: function() {
        console.log('Finished!');
    }
});

const Songs = () => (
    <div className='player'>
        <div className='playButton'>Play</div>
    </div>
);
export default Songs;
