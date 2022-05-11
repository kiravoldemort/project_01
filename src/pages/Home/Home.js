import React, { Component } from 'react';

import { View, Text, ScrollView, FlatList } from 'react-native';

import NewsItem from '../../components/NewsItem';

export default class Home extends Component {
	constructor(props) {
		super(props);
		this.setState = {
			data: []
		}
	}
	componentWillMount() {
		fetch('https://www.icketang.com/icketanglessonpublicdata/data/list.json')
			.then(res => res.json())
			.then(data => this.setState({data}))
	}
	render() {
		return (
			<View>
				<FlatList
					data={this.state.data}
					keyExtractor={item => item.id}
					renderItem={data => <NewsItem data={data.item}></NewsItem>}
				></FlatList>
			</View>

		)
	}
}