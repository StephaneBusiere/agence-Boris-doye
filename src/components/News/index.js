import React from 'react';
import PlayerC from 'src/components/Player';
import { Player } from 'video-react';
import './news.sass';

const News= () => {

    return <div>
    <div className='news'></div>
    <Player>
    <source src= "https://media.w3.org/2010/05/sintel/trailer_hd.mp4"/>
  </Player>

    
  </div>
};



export default News;