import React, { Component } from 'react';

import { View, Text, TextInput, StyleSheet, Button, ScrollView, Alert} from 'react-native';

import Discus from '../../components/Discus';
// 创建样式
let style = StyleSheet.create({
	input: {
		height: 100
	},
	right: {
		width: 80,
		padding: 10
	}
})

export default class List extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			id: 0,
			msg: ''
		}
	}
	componentWillMount() {
		fetch('https://www.icketang.com/icketanglessonpublicdata/data/comment.json?id=' + this.props.match.params.id)
			.then(res => res.json())
			.then(data => this.setState(data))
	}
	submitData() {
		let { msg, list } =this.state;
		if(/^\s*$/.test(msg)) {
			return Alert.alert('温馨提示', '请输入内容')
		}
		let date = new Date();
		// 拼凑提交的内容
		let data = {
			user: '雨夜清荷',
			content: msg,
			time: `刚刚 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
		}
		fetch('https://www.icketang.com/icketanglessonpublicdata/data/addComment.json')
			.then(res => res.json())
			.then(res => {
				if(res.errno === 0) {
					list.unshift(data);
					this.setState({list, msg: ''})
				}
			})

	}

	createList() {
		return this.state.list.map(item => <Discus key={item.user} data={item}></Discus>)
	}
	render() {
		return (
			<View>
				<TextInput style={style.input} placeholder="文明上网，理性发言！" multiline value={this.state.msg} onChangeText={msg => this.setState({msg})}><TextInput>
				<View style={{ flexDirection: 'row'}}>
					<View style={{flex: 1}}></View>
					<View style={style.right}>
						<Button title="提交" onPress={e=>this.submitData()}></Button>
					</View>
				</View>
				<ScrollView>{this.createList()}</ScrollView>

			</View>

		)
	}
}