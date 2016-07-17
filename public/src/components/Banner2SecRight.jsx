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
    <MuiThemeProvider muiTheme={muiTheme}>
    	<TextField
    		style ={{top: '50%',left: '50%', transform: 'translateX(-50%) translateY(-50%)', textColor:'white'}}
      		hintText="Email"
      		floatingLabelText="Subscribe"
    	/>
 	</MuiThemeProvider>
    	
    </div>
)
};