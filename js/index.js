require('babel-polyfill');
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Container from './components/container'
import Start from './components/start';
import Welcome from './components/welcome';

var d = document.getElementById('app');

const jsx = (

	<Router history = { hashHistory }>
		<Route path='/:n' component= { Container }>
			<IndexRoute component= { Welcome } />
			<Route path='s' component={ Start } />
		</Route>
	</Router>
);
document.addEventListener('DOMContentLoaded', () =>
	ReactDOM.render(jsx, d)
);	



