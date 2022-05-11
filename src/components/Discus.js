import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

// 创建样式
let style = StyleSheet.create({
	container: {
		marginLeft: 10,
		marginRight: 10,
		paddingTop: 10,
		paddingBottom: 10,
		borderBottomColor: '#ccc',
		borderBottomWidth: 1

	},
	user: {
		fontSize: 18,
		fontWeight: 'bold',
		paddingTop: 5,
		paddingBottom: 10
	},
	content: {
		fontSize: 15,
		lineHeight: 26,
		paddingBottom: 8
	},
	time: {
		fontSize: 12
	}
})

export default class Discus extends Component {
	render() {
		let { data } = this.props;
		return (
			<View>
				<Text style={style.user}>{data.user}</Text>
				<Text style={style.content}>{data.content}</Text>
				<Text style={style.time}>{data.time}</Text>
			</View>
		)
	}
}

Discus.defaultProps = {
	data: {}
}