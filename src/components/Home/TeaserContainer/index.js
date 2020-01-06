import React from 'react'
import { NavLink } from 'react-router-dom'


import './teaserContainer.sass'

const Teaser = (

    <div className="latestVideosContainer">
    <div className="teaserTitleContainer">
    <h2 className="teaserTitle">Nos dernières vidéos</h2>
    </div>
    <div className="TeaserContainer">
    
    
    <div className="iframe">
    
    <iframe className="iframeShowreelTeaser" src="https://player.vimeo.com/video/198345088?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1" width="1920" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    
    <NavLink
    exact
    to="/work"
    
    activeClassName="nav-link--active"
  >
   <div className="video-Link">
    <h3 className="videoLink-Regarder">regarder</h3>
   
    <h3 className="videoLink-Une">une</h3>   
    <h3 className="videoLink-Video">video</h3> 
    </div>
    </NavLink>
    
    <iframe className="iframeShowreelTeaser" src="https://player.vimeo.com/video/176137978?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1" width="1920" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <NavLink
    exact
    to="/work"
    
    activeClassName="nav-link--active"
  >
   <div className="video-Link">
    <h3 className="videoLink-Regarder">regarder</h3>
   
    <h3 className="videoLink-Une">une</h3>   
    <h3 className="videoLink-Video">video</h3> 
    </div>
    </NavLink>
    <iframe className="iframeShowreelTeaser" src="https://player.vimeo.com/video/282989783?autoplay=1&loop=1&title=0&byline=0&portrait=0&background=1" width="1920" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    <NavLink
    exact
    to="/work"
    
    activeClassName="nav-link--active"
  >
   <div className="video-Link">
    <h3 className="videoLink-Regarder">regarder</h3>
   
    <h3 className="videoLink-Une">une</h3>   
    <h3 className="videoLink-Video">video</h3> 
    </div>
    </NavLink>
    <iframe className="iframeShowreelTeaser" src="https://player.vimeo.com/video/274647795?autoplay=1&loop=1&background=1" width="1920" height="200" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
   
    </div>
    </div>


)

export default Teaser