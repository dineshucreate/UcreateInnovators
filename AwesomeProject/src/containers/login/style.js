import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(32, 53, 70)',
		flexDirection: 'column'
	},
	logoContainer: {
		alignItems: 'center',
		flex: 0.2,
		justifyContent: 'center'
	},
	logo: {
		width: 100,
		height: 100
	},
	title: {
		alignItems: 'center',
		color: '#f7c744',
		fontSize: 18,
		marginTop: 15,
		opacity: 0.5
	},
	infoContainer: {
		flex: 0.4
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		color: '#FFF',
		marginBottom: 20,
		paddingHorizontal: 10
	},
	inputError: {
		borderColor: 'red',
		borderWidth: 2
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
	countText: {
		color: '#FF00FF'
	},
	modal: {
		height: 100,
		width: 100,
		backgroundColor: 'white',
		borderRadius: 20
	}
}));
