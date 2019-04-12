import { StyleSheet } from 'react-native';

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
  },
  styleTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  styleImage: { 
    height: 200, 
    marginTop: 4,
  }
});

export default styles;
