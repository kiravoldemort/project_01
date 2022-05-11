import React, { Component } from 'react';

import { View, Text } from 'react-native';

import { Route } from 'react-router-native';

import Header from './components/Header';

import Home from './pages/Home/Home';

import Detail from './pages/Detail/Detail';

import Comments from './pages/Comments/Comments';

export default class App extends Component {
	render() {
		return (
			<View>
				<Header rightContent="登录" onLeftClick={e => this.props.history.go(-1)}>爱创课堂</Header>
				<Route exact path="/" component={Home}></Route>
				<Route path="/detail/:id" component={Detail}></Route>
				<Route path="/comments/:id" component={Comments}></Route>
			</View>
		)
	}
}