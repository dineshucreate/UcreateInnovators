/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import router from './router';
// import { login, home, settings } from './containers';

export default class NavigationComponentInitial extends Component {
	render() {
		const Begin = createAppContainer(router);
		return <Begin />;
	}
}

// const { container } = createAppContainer(LoginTab);
// export default container;

// const MainApp = createBottomTabNavigator(
// 	{
// 		Home: {
// 			screen: home
// 		},
// 		Settings: settings
// 	},
// 	{
// 		defaultNavigationOptions: ({ navigation }) => ({
// 			tabBarIcon: ({ focused, horizontal, tintColor }) => {
// 				const { routeName } = navigation.state;
// 				if (routeName === 'Home') {
// 					return (
// 						<Image
// 							source={require('./assets/home.png')}
// 							style={{ width: 20, height: 20, tintColor: tintColor }}
// 						/>
// 					);
// 				} else {
// 					return (
// 						<Image
// 							source={require('./assets/settings.png')}
// 							style={{ width: 20, height: 20, tintColor: tintColor }}
// 						/>
// 					);
// 				}
// 			}
// 		}),
// 		tabBarOptions: {
// 			activeTintColor: '#FF6F00',
// 			inactiveTintColor: '#263238'
// 		}
// 	}
// );
// const LoginTab = createStackNavigator({
// 	Login: {
// 		screen: login
// 	},
// 	MainApp: {
// 		screen: MainApp,
// 		navigationOptions: () => ({
// 			header: null
// 		})
// 	}
// });

// const stackNavigator = createStackNavigator(
// 	{
// 		login: login,
// 	},
// 	{
// 		initialRouteName: 'login'
// 	}
// );

// export default class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = { text: '' };
//     this.state = { text2: '' };
//   }

//   callback() {
//     let calc = (num1, num2, callback) => {
//       return callback(num1, num2);
//     }
//     let add = (a, b) => {
//       return a + b;
//     }
//     let multiply = (a, b) => {
//       return a * b;
//     }
//     console.log(calc(5, 5, multiply));
//     console.log(calc(5, 5, add));
//   }

//   promise() {
//     let prom = new Promise(function (resolve, reject) {
//       let isClean = true;
//       if (isClean == true) {
//         resolve('Clean');
//       } else {
//         reject('Not cleaned');
//       }
//     });
//     prom.then((resolve) => {
//       console.log('My room is ' + resolve);
//     }).catch((err) => {
//       console.log('My room is ' + err);
//     });
//   }

//   // Complex promise
//   complexPromise() {
//     let cleanRoom = () => {
//       return new Promise((resolve, reject) => {
//         resolve('Cleaned room ');
//       });
//     }

//     let removeGarbage = (message) => {
//       return new Promise((resolve, reject) => {
//         resolve(message + 'Garbage collected ');
//       });
//     }
//     let winIceCream = (message) => {
//       return new Promise(function (resolve, reject) {
//         resolve(message + 'Ice cream ');
//       });
//     }

//     cleanRoom().then((resultRoom) => {
//       return removeGarbage(resultRoom);
//     }).then((resultRoom) => {
//       return winIceCream(resultRoom);
//     }).then((resultRoom) => {
//       console.log('Everything is finished ' + resultRoom);
//     })

//     Promise.all([cleanRoom(), removeGarbage(), winIceCream()]).then(() => {
//       console.log('Finished at once');
//     })

//     Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(() => {
//       console.log('Call only one of them');
//     })

//     //Async/Await

//     const preMovie = async () => {
//       const wifeBringingTickets = new Promise((resolve, reject) => {
//         setTimeout(() => {
//           resolve('tickets');
//         }, 3000);
//       })

//       let ticket = await wifeBringingTickets;

//       console.log(`Wife: I have the tickets ${tickets}`);
//       console.log(`Husband: we should go in`);
//       console.log(`Wife: No i need popcorn`);

//       const getPopCorn = new Promise((resolve, reject) => {
//         resolve('pocorn');
//       })
//       let popcorn = await getPopCorn;
//       console.log(`Husband: we got popcorn ${popcorn}`);
//       console.log(`Husband: Now we should go in`);
//       console.log(`Wife: No i need butter`);

//       const getButter = new Promise((resolve, reject) => {
//         resolve('butter');
//       })
//       const butter = await getButter;
//       console.log(`Husband: we got butter ${butter}`);
//       console.log(`Husband: Now we should go in`);

//       return ticket;
//     }
//     console.log(preMovie);
//   }

//   render() {
//     this.callback()
//     this.promise()
//     this.complexPromise()
//     return (
//       <SafeAreaView style={styles.safeArea}>
//         <Image source={require('./assets/roads.jpg')} style={styles.container}></Image>
//           <View style={styles.logoContainer}>
//             <Image source={require('./assets/0.gif')} style={styles.imageLogo}></Image>
//           </View>

//         {/* <View style={styles.textViewContainer}>
//             <TextInput
//               style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
//               onChangeText={(text) => this.setState({ text })}
//               placeholder = "This is placeholder"
//               value={this.state.text}
//             />
//           </View>
//           <View style={styles.textViewContainer}>
//             <TextInput
//               style={{ height: 40, borderColor: 'gray', borderWidth: 1, padding: 10 }}
//               onChangeText={(text2) => this.setState({ text2 })}
//               placeholder = "This is placeholder 2"
//               value={this.state.text2}
//             />
//           </View> */}
//       </SafeAreaView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignSelf: 'stretch',
//     padding: 10,
//     width: null,
//   },
//   logoContainer: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   imageLogo: {
//     marginTop: 50,
//     alignItems: 'center',
//     width: 100,
//     height: 100,
//   },
//   textViewContainer: {
//     padding: 10,
//     marginRight: 8,
//     marginLeft: 8
//   },
//   textStyle: {
//     textAlign: 'center'
//   },
//   safeArea: {
//     flex: 1,
//     backgroundColor: '#ddd'
//   },
//   viewStyleOne: {
//     height: 40,
//     width: 40,
//     flexGrow: 0.3,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'blue',
//     marginLeft: 8
//   },
//   viewStyleTwo: {
//     width: 40,
//     height: 40,
//     flexGrow: 0.3,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'green',
//     marginLeft: 8
//   },
//   viewStyleThree: {
//     width: 40,
//     height: 40,
//     flexGrow: 0.3,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'red',
//     padding: 10,
//     marginRight: 8,
//     marginLeft: 8
//   },
// });
