import { StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
export default (styles = StyleSheet.create({
	burgerIcon: {
		// marginLeft: 8,
		// marginTop: 16,
		position: 'absolute',
		left: 10
	}
}));
