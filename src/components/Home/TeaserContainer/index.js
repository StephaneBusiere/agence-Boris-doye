import React from 'react'
import { NavLink } from 'react-router-dom'

import showreelMini from 'src/assets/images/Showreel.jpg'
import vietnam from 'src/assets/images/Vietnam.jpg'
import outdoormix from 'src/assets/images/Outdoormix.jpg'
import queyras from 'src/assets/images/Queyras.jpg'
import './teaserContainer.sass'

const Teaser = (

    <div className="latestVideosContainer">
    <div className="teaserTitleContainer">
    <h2 className="teaserTitle">Nos dernières vidéos</h2>
    </div>
    <div className="TeaserContainer">
    
    
    <div className="teaserPicture">
    <div className="overlayShowReelContainer">
    <img className="showReellMini" src={showreelMini} alt="showreel"/>
   
    <div className="overlayShowReelContent">
    <NavLink
    exact
    to="/work"
    
    activeClassName="nav-link--active"
  >
   <div className="video-LinkShowreel">
    <h3 className="videoLink-Regarder">regarder</h3>
   
    <h3 className="videoLink-Une">une</h3>   
    <h3 className="videoLink-Video">video</h3> 
    
    </div>
    
    </NavLink>
    </div>
    </div>
    <div className="overlayQueyrasContainer">
    <img className="queyrasPicture" src={queyras} alt="queyras"/>
    <div className="overlayQueyrasContent">
    <NavLink
    exact
    to="/work"
    
    activeClassName="nav-link--active"
  >
   <div className="video-LinkQueyras">
    <h3 className="videoLink-Regarder">regarder</h3>
   
    <h3 className="videoLink-Une">une</h3>   
    <h3 className="videoLink-Video">video</h3> 
    </div>
    </NavLink>
    </div>
    </div>
    <div className="overlayVietnamContainer">
    <img className="vietnamPicture" src={vietnam} alt="vietnam"/>
    <div className="overlayVietnamContent">
    <NavLink
    exact
    to="/work"
    
    activeClassName="nav-link--active"
  >
   <div className="video-LinkVietnam">
    <h3 className="videoLink-Regarder">regarder</h3>
   
    <h3 className="videoLink-Une">une</h3>   
    <h3 className="videoLink-Video">video</h3> 
    </div>
    </NavLink>
    </div>
    </div>
    <div className="overlayOutdoorContainer">
    <img className="outdoorPicture" src={outdoormix} alt="outdoormix"/>
    <div className="overlayOutdoorContent">
    <NavLink
    exact
    to="/work"
    
    activeClassName="nav-link--active"
  >
   <div className="video-LinkOutdoor">
    <h3 className="videoLink-Regarder">regarder</h3>
   
    <h3 className="videoLink-Une">une</h3>   
    <h3 className="videoLink-Video">video</h3> 
    </div>
    </NavLink>
    </div>
    </div>
    
    </div>
    </div>
    </div>

)

export default Teaser