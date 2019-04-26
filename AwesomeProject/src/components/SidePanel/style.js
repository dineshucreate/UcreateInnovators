import { StyleSheet, Dimensions } from 'react-native';
export default (styles = StyleSheet.create({
	profileContainer: {
		flex: 1,

		height: 200,
		alignItems: 'center',
		justifyContent: 'center'
	},
	profileImageContainer: {
		width: 100,
		backgroundColor: 'gray',
		height: 100,
		borderRadius: 50
	},
	home: {
		marginLeft: 16,
		marginTop: 12
	},
	profile: {
		marginLeft: 16,
		marginTop: 12
	},
	logout: {
		marginLeft: 16,
		marginTop: 12
	},
	profileImage: {
		alignSelf: 'center',
		width: 100,
		height: 100
	},
	sideMenuButtons: {
		height: 45
	},
	separatorsView: {
		height: 1,
		flex: 1,
		marginLeft: 15,
		backgroundColor: 'gray'
	}
}));
