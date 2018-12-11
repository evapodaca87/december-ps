import React from 'react';
import Songs from './Songs.js';

const Music = () => (
    <div className='contact'>
        <div className='music'>
            <h1 className='big'>Music</h1>
            <a href='https://open.spotify.com/artist/0jVctYQtkzafC6FoyPqacD'>
                <figure className='snip1579'>
                    <img
                        className='boxes'
                        src='https://images-na.ssl-images-amazon.com/images/I/51-uFt5ueUL._SS500.jpg'
                        alt='profile-sample2'
                    />
                    <figcaption>
                        <h3>15.10</h3>
                        <h5>Album</h5>
                        <blockquote>
                            <p>My first and only solo album available on most platforms</p>
                        </blockquote>
                    </figcaption>
                </figure>
            </a>
            <a href='https://www.youtube.com/channel/UCkTpCNPkxwrHfl0kNVgkGxQ'>
                <figure className='snip1579'>
                    <img
                        className='boxes'
                        src='https://yt3.ggpht.com/a-/AN66SAwz1j3RU6ckMxR_IMmBN2i8LkA2VucH0pjJMw=s288-mo-c-c0xffffffff-rj-k-no'
                        alt='profile'
                    />
                    <figcaption>
                        <h3>Simply Sampled</h3>
                        <h5>YouTube Channel</h5>
                        <blockquote>
                            <p>
                                A YouTube channel I created with a producer friend where we are given one song to sample
                                and have to some up with a 1-minute beat/song out of it. Started as a way to insire
                                ourselves to make more music.
                            </p>
                        </blockquote>
                    </figcaption>
                </figure>
            </a>
            <a href='https://soundcloud.com/inflatedpenguins'>
                <figure className='snip1579'>
                    <img
                        className='boxes'
                        src='https://i1.sndcdn.com/avatars-000490337808-6pa1iv-t500x500.jpg'
                        alt='pixels'
                    />
                    <figcaption>
                        <h3>Inflated Penguins</h3>
                        <h5>Soundcloud</h5>
                        <blockquote>
                            <p>More of my songs, beats, and remixes not featured on my album.</p>
                        </blockquote>
                    </figcaption>
                </figure>
            </a>
            <hr />
            <br />
            <h3>Here are a few of my latest or favorite songs:</h3>
            <Songs />
        </div>
    </div>
);
export default Music;
