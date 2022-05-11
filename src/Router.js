import React, { Component } from 'react';

import { NativeRouter, Route } from 'react-router-native';

import App from './App'

export default class Router extends Component {
	// 路由渲染策略
	render() {
		return (
			<NativeRouter>
				<Route path="/" component={App}></Route>
			</NativeRouter>
		)
	}
}