import { StyleSheet, Dimensions } from 'react-native';
const width = Dimensions.get('window').width;
export default (styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	},
	containerMain: {
		flex: 1,
		flexDirection: 'row',
		height: 80,
		width: width / 2 - 20,
		margin: 5
	},
	userImage: {
		width: 50,
		height: 50,
		marginLeft: 10,
		marginTop: 5,
		backgroundColor: 'gray',
		borderRadius: 25
	},
	textView: {
		flex: 1,
		height: 50,
		marginTop: 5,
		marginLeft: 10,
		marginRight: 10
	},
	itemSeparator: {
		height: 1,
		width: '86%',
		backgroundColor: '#CED0CE',
		marginLeft: '14%'
	},
	activityIndicator: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		height: 80
	}
}));
