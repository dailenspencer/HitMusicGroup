import React from 'react';


class TourDates extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      
    };
  }

  
  
  render() {
    return (
        <div id="TourDatesBackground">
          <div id="TourDatesContainer">
            <h id="TourDatesHeader">Tour Dates</h>
            <ul id="TourDatesList">
              <li>Fonda Theatre, Los Angeles - July 27th</li>
              <li>Filmore, San Fran - August 15th</li>
              <li>Paramount Theatre, Denver - September 1st</li>
              <li>Vagabond, Miami - September 21st</li>
              <li>Club Luna, Bahamas - October 15th</li>
            </ul>
            <a href="" id="BookNow">Book Tickets ></a>
          </div>
        </div>

        
    );
  }
}

module.exports = TourDates