import React, { Component } from 'react';

import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

let style = StyleSheet.create({
	title: {
		paddingTop: 20,
		paddingBottom: 10,
		textAlign: 'center',
		fontSize: 20,
		fontWeight: 'bold'
	},
	status: {
		padding: 10,
		paddingTop: 0,
		paddingBottom: 5,
		flexDirection: 'row'
	},
	time: {
		fontSize: 12,
		flex: 1
	},
	comment: {
		fontSize: 12
	},
	img: {
		width: '100%',
		height: 300
	},
	content: {
		fontSize: 16,
		lineHeight: 30,
		padding: 10
	},
	buttonContainer: {
		marginTop: 10,
		marginBottom: 60,
		padding: 20
	}
})

export default class Detail extends Component {
	constructor(props) {
		super(props)
		this.state = {
			data: {}
		}
	}
	componentWillMount() {
		fetch('https://www.icketang.com/icketanglessonpublicdata/data/detail.json?id=' + this.props.match.params.id)
			.then(res => res.json())
			.then(data => this.setState({data}))
	}
	render() {
		let { data } = this.state;
		return (
			<ScrollView>
				<Text style={style.title}>{data.title}</Text>
				<View style={style.status}>
					<Text style={style.time}>{data.time}</Text>
					<Text style={style.comment}>{'评价' + (data.comment || '')}</Text>
				</View>
					<Image style={style.img} source={{ uri: 'https://www.icketang.com/icketanglessonpublicdata' + data.img }}></Image>
						<Text style={style.content}>&emsp;&emsp;{data.content}</Text>
						<View style={style.buttonContainer}>
							<Button title="查看更多评论" onPress={e => this.props.history.push('/comments/' + data.id)}></Button>
						</View>
			</ScrollView>

		)
	}
}