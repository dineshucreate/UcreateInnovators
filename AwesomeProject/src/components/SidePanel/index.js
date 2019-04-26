import React, { Component } from 'react';
import { Text, View, TouchableOpacity, SafeAreaView, ScrollView, Image, Dimensions } from 'react-native';
import styles from './style';
const height = Dimensions.get('window').height;
export default class index extends Component {
	home = () => {
		const { navigation } = this.props.navigation;
		
	};

	profile = () => {
		const { navigation } = this.props.navigation;
	};

	logout = () => {
		const { navigation } = this.props.navigation;
	};

	render() {
		return (
			<View>
				<SafeAreaView>
					<ScrollView style={{ height: height }}>
						<View>
							<View style={styles.profileContainer}>
								<View style={styles.profileImageContainer}>
									{/* <Image source={require('../../assets/0.gif')} style={styles.profileImage} /> */}
								</View>
							</View>
							<TouchableOpacity onPress={this.home} style={styles.sideMenuButtons}>
								<Text style={styles.home}>Home</Text>
							</TouchableOpacity>
							<View style={styles.separatorsView} />
							<TouchableOpacity onPress={this.profile} style={styles.sideMenuButtons}>
								<Text style={styles.profile}>Profile</Text>
							</TouchableOpacity>
							<View style={styles.separatorsView} />
							<TouchableOpacity onPress={this.logout} style={styles.sideMenuButtons}>
								<Text style={styles.logout}>Logout</Text>
							</TouchableOpacity>
						</View>
					</ScrollView>
				</SafeAreaView>
			</View>
		);
	}
}
