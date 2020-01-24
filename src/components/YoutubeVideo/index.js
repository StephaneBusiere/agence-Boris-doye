import PropTypes from 'prop-types';
import React from 'react';
import bigPictureReal from 'src/assets/images/alpesRealisateur.jpg'
import annecyPhoto from 'src/assets/images/Kinaphoto-Photo-gallerie-accueil.jpg'
import paysagePhoto from 'src/assets/images/Kinaphoto-Photo-Outdoor-Sport-Extreme-Paysage-6.jpg'
import logoBorisNoirPetit from 'src/assets/images/LogoBorisNoirPetit.png'
import logoBorisSVG from 'src/assets/images/logoborisNew.svg'
class YouTubeVideo extends React.PureComponent {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  componentDidMount = () => {
    // On mount, check to see if the API script is already loaded
  
    if (!window.YT) { // If not, load the script asynchronously
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';

      // onYouTubeIframeAPIReady will load the video after the script is loaded
      window.onYouTubeIframeAPIReady = this.loadVideo;

      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    } else { // If script is already there, load the video directly
      this.loadVideo();
    
    }
  };

  loadVideo = () => {
    const { id } = this.props;
    
    this.player = new window.YT.Player(`youtube-player-${id}`, {
      videoId: 'PEwa4Eehfpk',
      
      
      height: '1010',
      width: '1910',
      
      playerVars:{
      mute:1,
      autoplay:1,
      loop:1,
      controls:0,
      showinfo:0,
      wmode: 'transparent',
      autohide:0,
      branding: 0,
      rel: 0,
      modestbranding:0,
      
      origin: window.location.origin,

      playlist: 'PEwa4Eehfpk',
  },
      events: {
      onReady: this.onPlayerReady,
      onStateChange:this.onPlayerStateChange
    },
  });
  
}
 
  onPlayerReady = event => {
    event.target.playVideo();
  };
  onPlayerStateChange=event =>{
    var YTP=event.target;
    var background=this.refs.Ref1
    var title=this.refs.Ref2
    var logo=this.refs.Ref3
   
      
    if (event.data===1) {
        var remains=YTP.getDuration() - YTP.getCurrentTime();
        background.style.opacity=1;
        title.style.opacity=0;
        logo.style.opacity=0;
        if(this.rewindTO)
                    clearTimeout(this.rewindTO);
                this.rewindTO=setTimeout(function(){
                     YTP.seekTo(0);
                 },(remains-0.1)*1000);
    }
  }


  render = () => {
    const { id } = this.props;
    
    var divStyle={
    backgroundImage: `url(${paysagePhoto})`,
    height: '1010px',
    backgroundSize: 'cover',
    opacity: '1'
        }
    
    var backgroundStyle= {
    opacity: '0',
    transition: 'opacity 2s',
    backgroundSize: 'cover',
    
      }
   

    
    return (
        <section class="full-size-page">
      <div id="video-overlay" style={divStyle}  >
      <div className="presentationAgenceTitle" ref='Ref2' >REALISATEUR AUDIO-VISUEL</div>
      <object className="logoBorisNoir" ref='Ref3' data={logoBorisSVG}>svg-animation</object>
      <div class="foreground-video" style={backgroundStyle} ref='Ref1'>
        <div id={`youtube-player-${id}`} >
      </div>
      </div>
      </div>
      </section>
    );
  };
}

export default YouTubeVideo;

