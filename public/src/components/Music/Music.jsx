import React from 'react';

class Music extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  openUrl(url){
    window.open(url, '_blank');
  }
  
  render() {
    return (
        <div id="MusicBackground">
          <div id="FirstMusicContainer">
            <div id="FirstAlbum" className="Album" onClick={this.openUrl.bind(null, 'http://www.hotnewhiphop.com/dj-twin-day-1-ep-new-mixtape.116462.html')}></div>
            <div id="SecondAlbum" className="Album" onClick={this.openUrl.bind(null, 'http://indy.livemixtapes.com/mixtapes/33547/hmafia.html')}></div>
            <div id="ThirdAlbum" className="Album" onClick={this.openUrl.bind(null, 'http://indy.livemixtapes.com/mixtapes/35921/shoota-notoriety.html')}></div>
            <div id="FourthAlbum" className="Album" onClick={this.openUrl.bind(null, 'http://www.livemixtapes.com/mixtapes/29372/capo-glonl-2.html')}></div>
          </div>
          <div id="SecondMusicContainer">
            <div id="FirstVideo" className="Album" onClick={this.openUrl.bind(null, 'https://www.youtube.com/watch?v=PKrx9HBLObI')}></div>
            <div id="SecondVideo" className="Album" onClick={this.openUrl.bind(null, 'https://www.youtube.com/watch?v=kjmJ-qCIgDE')}></div>
          </div>
        </div>
    );
  }
}

module.exports = Music