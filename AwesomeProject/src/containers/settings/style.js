import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center'
	},
	buttonContainer: {
		backgroundColor: '#f7c744',
		paddingVertical: 15
	},
	buttonText: {
		textAlign: 'center',
		color: 'rgb(32, 53, 70)',
		fontSize: 15,
		fontWeight: 'bold'
	},
	button: {
		height: 40,
		width: 40,
		backgroundColor: 'red',
		position: 'absolute',
		top: 300,
		left: 200
	},
	image: {
		width: 200,
		height: 200
	}
}));
