import React from 'react';
import { Player } from 'video-react';
import showReelVideo from 'src/assets/images/showReelVideo.mp4'
import showreel from 'src/assets/images/Showreel.jpg'


const PlayerC= () => {

    return (

        <Player
      autoplay
      poster='src/assets/images/Showreel.jpg'

      src='https://youtu.be/PEwa4Eehfpk'
    />
    );
};



export default PlayerC;