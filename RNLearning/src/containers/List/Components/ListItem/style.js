import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

  styleMainContainer: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginHorizontal: 15,
    marginTop: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#3C8DBC',
    borderRadius: 10,
    width: width - 30,
  },
  styleMainContainerGrid: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'column',
    marginLeft: 15,
    marginTop: 15,
    padding: 10,
    borderWidth: 2,
    borderColor: '#3C8DBC',
    borderRadius: 10,
    width: (width / 2) - 22,
  },
  styleTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontFamily: 'Cochin',
  },
  styleImage: { 
    height: 200, 
    marginTop: 4,
  },
  styleImageGrid: { 
    height: 90, 
    marginTop: 4,
  }
});

export default styles;
