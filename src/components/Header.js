import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

let style = StyleSheet.create({
	icktHeader: {
		height: 50,
		backgroundColor: '#3e86ce',
		flexDirction: 'row'
	},
	Left: {
		width: 50
	},
	arrow: {
		position: 'relative',
		width: 50,
		height: 50
	},
	arrow1: {
		position: 'absolute',
		left: 10,
		top: 10,
		borderWidth: 10,
		borderColor: 'transparent',
		borderRightColor: '#fff'
	},
	arrow2: {
		position: 'absolute',
		left: 12,
		top: 10,
		borderWidth: 10,
		borderColor: 'transparent',
		borderRightColor: '#3e86ce'
	},
	leftContent: {
		fontSize: 16,
		color: '#fff',
		lineHeight: 50,
		textAlign: 'center'
	}
	right: {
		width: 50
	},
	title: {
		flex: 1
	},
	titleContent: {
		fontSize: 20,
		color: '#fff',
		lineHeight: 50,
		textAlign: 'center'
	}
})

export default class Header extends Component {
	render() {
		let { title, children, leftContent, rightContent, onLeftClick, onRightClick} = this.props;
		return (
			<View style={style.icktHeader}>
				<View style={style.left} onTouchEnd={e => onLeftClick(e)}>
					{
						leftContent ? 
							<Text style={style.leftContent}>{leftContent}</Text> :
							<View style={style.arrow}>
								<View style={style.arrow1}></View>
								<View style={style.arrow2}></View>
							</View>
					}
				</View>
				<View style={style.title}>
					<Text style={style.titleContent}>{children || title}</Text>
				</View>
				<View style={style.right} onTouchEnd={e => onRightClick(e)}>
					<Text style={style.leftContent}>{rightContent}</Text>
				</View>
			</View>
		)	
	}
}

let fn = () => {};

Header.defaultProps = {
	title: '',
	leftContent: '',
	rightContent: '',
	onLeftClick: fn,
	onRightClick: fn
}