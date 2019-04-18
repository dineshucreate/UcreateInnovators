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
	}
}));
