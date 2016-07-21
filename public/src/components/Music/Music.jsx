import React from 'react';

class Music extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  
  
  render() {
    return (
        <div id="MusicBackground">
          <div id="MusicContainer">
            <div id="FirstAlbum" className="Album"></div>
            <div id="SecondAlbum" className="Album"></div>
            <div id="ThirdAlbum" className="Album"></div>
          </div>
        </div>
    );
  }
}

module.exports = Music