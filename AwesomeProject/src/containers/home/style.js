import { StyleSheet } from 'react-native';

export default (styles = StyleSheet.create({
	containerMain: {
		flex: 1,
		flexDirection: 'row',
		height: 60
	},
	userImage: {
		width: 50,
		height: 50,
		marginLeft: 10,
		marginTop: 10,
		backgroundColor: 'gray',
		borderRadius: 25
	},
	textView: {
		height: 50,
		marginTop: 10,
		marginLeft: 10
	}
}));
