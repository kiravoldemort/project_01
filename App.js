/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
// 引入路由
import { NativeRouter, Route, Link } from 'react-router-native';

// 定义组件
let Home = props => (
	<View>
		<Text>home page</Text>
	</View>
)
let List = props => {
	console.log(props)
	return (
		<View>
			<Text>list page</Text>
		</View>
	)
}
let Detail = props => (
	<View>
		<Text>detail page</Text>
	</View>
)

// 定义应用程序
export default class App extends Component {
	// 渲染
	render() {
		return (
			<NativeRouter>
				<Text>header part</Text>
				{/*路由导航*/}
				<Link to="/">
					<Text>Home</Text>
				</Link>
				<Link to="/list/10">
					<Text>list</Text>
				</Link>
				<Link to="/detail/10">
					<Text>detail</Text>
				</Link>
				{/*定义页面*/}
				{/*默认路由*/}
				<Route exact path="/" component={Home}></Route>
				<Route path="/list/:page" component={List}></Route>
				<Route path="/detail/:id" component={Detail}></Route>
			</NativeRouter>
		)
	}
}




// const instructions = Platform.select({
// 	ios: 'Press Cmd+R to reload,\n' +
// 		'Cmd+D or shake for dev menu',
// 	android: 'Double tap R on your keyboard to reload,\n' +
// 		'Shake or press menu button for dev menu',
// });

// export default class App extends Component<{}> {
// 	// 构造函数
// 	constructor(props) {
// 		super(props);
// 		// 状态
// 		this.state = {
// 			title: 'hello 爱创课堂'
// 		}
// 	}
// 	// 组件创建完成
// 	componentDidMount() {
// 		console.log('componentDidMount', 11111111111111)
// 	}
// 	render() {
// 		return (
// 			<View style={styles.container}>
// 				<Text style={styles.welcome}>{this.state.title}</Text>
// 				<Text style={styles.welcome}>{this.state.title}</Text>
// 				{/*直接在组件中，写样式*/}
// 				<Text style={{ color: 'gold' }}>{this.state.title}</Text>
// 				<Text style={styles.instructions}>
// 					To get started, edit App.js
// 				</Text>
// 				<Text style={styles.instructions}>
// 					{instructions}
// 				</Text>
// 				{/*View组件不能直接书写样式*/}
// 				{/*<View>hello</View>*/}
// 			</View>
// 		);
// 	}
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: 'center',
// 		alignItems: 'center',
// 		backgroundColor: '#F5FCFF',
// 		// 字体样式，view不支持
// 		// fontSize: 20
// 	},
// 	welcome: {
// 		fontSize: 20,
// 		textAlign: 'center',
// 		margin: 10,
// 		color: 'red'
// 	},
// 	instructions: {
// 		textAlign: 'center',
// 		color: '#333333',
// 		marginBottom: 5,
// 	},
// });
