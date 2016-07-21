import React from 'react'
import {Route, IndexRoute, Router, browserHistory} from 'react-router'


import App from './src/components/App'
import Home from './src/components/Home'
import TourDates from './src/components/TourDates/TourDates'
import Music from './src/components/Music/Music'
import hashHistory  from 'react-router'

export default (
	<Router history={hashHistory}>
  		<Route path="/" component={App}>
  			<IndexRoute component={Home}/>
  			<Route path="/TourDates" component={TourDates}/>
  			<Route path="/Music" component={Music}/>
  		</Route>
    </Router>
)
