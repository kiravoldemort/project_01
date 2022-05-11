import React, { Component } from 'react';

import { View, Text, Image, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

let style = StyleSheet.create({
	container: {
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: '#ccc',
		flexDirection: 'row'
	},
	img: {
		width: 75,
		height: 60
	},
	content: {
		flex: 1,
		paddingLeft: 10,
		position: 'relative'
	},
	title: {
		fontSize: 16,
		fontWeight: 'bold',
		paddingBottom: 4
	},
	intro: {
		fontSize: 12,
		lineHeight: 20
	},
	comment: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		fontSize: 12
	}

})

export default class NewItem extends Component {
	render() {
		let { data } = this.porps;
		return (
			<Link to={'/detail/' + data.id}>
				<View style={style.container}>
					<Image Style={style.img} source={{ uri: 'https://www.icketang.com/icketanglessonpublicdata' + data.img}}></Image>
					<View style={style.content}>
						<Text style={style.title}>{data.title}</Text>
						<Text style={style.intro}>{data.content}</Text>
						<Text style={style.comment}>{'评论：' + data.comment}</Text>
					</View>
				</View>
			</Link>
		)
	}
}

NewItem.defaultProps = {
	data: {}
}