import React from 'react';
import './App.css';

const Contact = () => {
    return (
        <div className='contacts'>
            <h1 className='big'>Contact</h1>
            <a href='https://www.linkedin.com/in/evan-apodaca/'>
                <img alt='linked' className='link-badge' src='https://image.flaticon.com/icons/svg/25/25320.svg' />
            </a>
            <a href='EMAIL'>
                <img alt='email' className='link-badge' src='https://image.flaticon.com/icons/svg/37/37572.svg' />
            </a>
            <a href='https://github.com/evapodaca87'>
                <img alt='github' className='link-badge' src='https://image.flaticon.com/icons/svg/25/25657.svg' />
            </a>
            <a href='https://talent.galvanize.com/students/3122'>
                <img alt='galv' className='link-badge' src='http://i63.tinypic.com/2ujgzk4.png' />
            </a>
            <a href='https://drive.google.com/file/d/19025nKMmW7f2rdEjvwWVxmVOJ37GEYwb/view?usp=sharing'>
                <img alt='resume' className='link-badge' src='https://image.flaticon.com/icons/svg/1244/1244742.svg' />
            </a>
            <a href='https://open.spotify.com/artist/0jVctYQtkzafC6FoyPqacD'>
                <img alt='spotify' className='link-badge' src='https://image.flaticon.com/icons/svg/49/49097.svg' />
            </a>
            <a href='https://evan-apodaca.surge.sh'>
                <img alt='home' className='link-badge' src='https://image.flaticon.com/icons/svg/70/70370.svg' />
            </a>
        </div>
    );
};
export default Contact;
