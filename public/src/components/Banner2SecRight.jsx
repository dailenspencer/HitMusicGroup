import React from 'react';
import TextField from 'material-ui/TextField';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const muiTheme = getMuiTheme({
  textField: {
    textColor: 'white',
    hintColor: 'white'
  }
});

export default (props) => {

return (
    <div id="Banner2SecRight" name="Banner2SecRight">
      <h id="BookingHeader">Booking</h>
      <p>Kirk Kingston</p>
      <p>kirkkingston@gmail.com</p>
    </div>
)
};