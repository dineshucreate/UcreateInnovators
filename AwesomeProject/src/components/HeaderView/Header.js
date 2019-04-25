import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import styles from './style';

export default class Header extends Component {
	burgerItemTap = () => {
		console.log('menu tapped');
		// this.props.navigation.toggleDrawer();
	};

	render() {
		return (
			<View
				style={{
					height: 60,
					backgroundColor: 'white',
					flexDirection: 'row',
					justifyContent: 'center',
					alignItems: 'center'
				}}
			>
				<TouchableOpacity style={styles.burgerIcon} onPress={this.props.onClickIcon}>
					<Image source={require('../../assets/burger.png')} />
				</TouchableOpacity>
				<Text
					style={{
						fontFamily: 'Rajdhani-Bold',
						fontSize: 24,
						textAlign: 'center'
					}}
				>
					{this.props.headerTitle}
				</Text>
			</View>
		);
	}
}
