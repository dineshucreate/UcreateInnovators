/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { homeStyles }  from '../login'
import {
  Picker,
  Text,
  View
} from 'react-native';

export default class Home extends Component {
  state = {user: 'Choose from above'}
  updateUser = (user) => {
     this.setState({ user: user })
  }
  render() {
    return (
      <View style={homeStyles.container}>
        <View style={homeStyles.centerBox}>
      <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Steve" value = "steve" />
               <Picker.Item label = "Ellen" value = "ellen" />
               <Picker.Item label = "Maria" value = "maria" />
            </Picker>

          <Text style={homeStyles.text}>{this.state.user}</Text>
      </View>
      {/* <View style={styles.secondBox}>
      </View> */}
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     justifyContent: 'center',
//     backgroundColor: 'green'
//   },
//   centerBox: {
//     flex: 1,
//     justifyContent: 'center',
//     margin: 20,
//     padding:15,
//     borderRadius: 4,
//     backgroundColor: 'orange'
//   },
//   secondBox: {
//     flex: 2,
//     justifyContent: 'center',
//     margin: 20,
//     padding:15,
//     borderRadius: 4,
//     backgroundColor: 'yellow'
//   },
//   input: {
//     height: 40,
//     borderRadius: 4,
//     borderColor: '#7a42f4',
//     borderWidth: 1
//  },
//  text: {
//   fontSize: 30,
//   alignSelf: 'center',
//   color: 'red'
// }
// });
