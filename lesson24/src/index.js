import React, { Component } from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom'
import axios from 'axios'

import Home from './home.js'
import List from './list.js'

class App extends Component {
	componentDidMount () {
		// http://www.dell-lee.com/react/api/header.json
		//
		axios.get('/react/api/header.json').then(res => {
			console.log(res.data)
		})
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<Route path='/' exact component={Home} />
					<Route path='/list' component={List} />
				</div>
			</BrowserRouter>
		)
	}
}

ReactDom.render(<App />, document.getElementById('root'));
