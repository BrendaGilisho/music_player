import React, { useState } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { FaPlayCircle } from 'react-icons/fa';
import { FaPauseCircle } from 'react-icons/fa';

import './Player.css'
import AliImg from '../assets/images/lady.jpg'
import LukasImg from '../assets/images/heart.jpg'
import LukeImg from '../assets/images/love1.jpg'
import SpiceImg from '../assets/images/lineArt.jpg'

import Sound from 'react-sound'
import WhatIf from '../assets/music/whatIf.mp3'
import LoveSomeone from '../assets/music/loveSomeone.mp3'
import Houston from '../assets/music/houston.mp3'
import MeLike from '../assets/music/soMiLikeIt.mp3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




export default function Player(
    handleSongLoading,
    handleSongPlaying,
    handleSongFinishedPlaying
) {
    //functions
    const [isPlaying1, setIsPlaying1] = useState(false);
    const [isPlaying2, setIsPlaying2] = useState(false);
    const [isPlaying3, setIsPlaying3] = useState(false);
    const [isPlaying4, setIsPlaying4] = useState(false);


    return (
        <div className='player-card'>
            <Carousel infiniteLoop showIndicators>

                <div className='song1'>
                    <div className='progress-img'>
                        <div className='song-img'>
                            <img className='img1' alt='img1' src={AliImg} />
                        </div>
                    </div>

                    <div className='title-artist'>
                        <div>What if I Told You</div>
                        <div>Ali Gatie</div>

                        <Sound
                            url={WhatIf}
                            playStatus={isPlaying1 ? Sound.status.PLAYING : Sound.status.STOPPED}
                            playFromPosition={300}
                            onLoading={handleSongLoading}
                            onPlaying={handleSongPlaying}
                            onFinishedPlaying={handleSongFinishedPlaying}
                        />

                    </div>

                    <div className='buttons'>
                        <div
                            onClick={() => setIsPlaying1(!isPlaying1)}>{!isPlaying1 ? <FaPlayCircle /> : <FaPauseCircle />}</div>
                    </div>
                </div>


                <div className='song2'>
                    <div className='progress-img'>
                        <div className='song-img'>
                            <img className='img1' alt='img1' src={LukasImg} />

                        </div>
                    </div>

                    <div className='title-artist'>
                        <div>Love Someone</div>
                        <div>Lukas Graham</div>

                        <Sound
                            url={LoveSomeone}
                            playStatus={isPlaying2 ? Sound.status.PLAYING : Sound.status.STOPPED}
                            playFromPosition={300}
                            onLoading={handleSongLoading}
                            onPlaying={handleSongPlaying}
                            onFinishedPlaying={handleSongFinishedPlaying}
                        />

                    </div>

                    <div className='buttons'>
                        <div onClick={() => setIsPlaying2(!isPlaying2)}>{!isPlaying2 ? <FaPlayCircle /> : <FaPauseCircle />}</div>
                    </div>

                </div>


                <div className='song3'>
                    <div className='progress-img'>
                        <div className='song-img'>
                            <img className='img1' alt='img1' src={LukeImg} />

                        </div>
                    </div>

                    <div className='title-artist'>
                        <div>Houston We Got A Problem</div>
                        <div>Luke Combs</div>

                        <Sound
                            url={Houston}
                            playStatus={isPlaying3 ? Sound.status.PLAYING : Sound.status.STOPPED}
                            playFromPosition={300}
                            onLoading={handleSongLoading}
                            onPlaying={handleSongPlaying}
                            onFinishedPlaying={handleSongFinishedPlaying}
                        />

                    </div>

                    <div className='buttons'>
                        <div onClick={() => setIsPlaying3(!isPlaying3)}>{!isPlaying3 ? <FaPlayCircle /> : <FaPauseCircle />}</div>
                    </div>

                </div>


                <div className='song4'>
                    <div className='progress-img'>
                        <div className='song-img'>
                            <img className='img1' alt='img1' src={SpiceImg} />

                        </div>
                    </div>

                    <div className='title-artist'>
                        <div>So Me Like It</div>
                        <div>Spice</div>

                        <Sound
                            url={MeLike}
                            playStatus={isPlaying4 ? Sound.status.PLAYING : Sound.status.STOPPED}
                            playFromPosition={300}
                            onLoading={handleSongLoading}
                            onPlaying={handleSongPlaying}
                            onFinishedPlaying={handleSongFinishedPlaying}
                        />

                    </div>

                    <div className='buttons'>
                        <div onClick={() => setIsPlaying4(!isPlaying4)}>{!isPlaying4 ? <FaPlayCircle /> : <FaPauseCircle />}</div>
                    </div>

                </div>
            </Carousel>
        </div>

    );
}