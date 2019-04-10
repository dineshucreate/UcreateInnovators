/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// import {createStore} from 'redux'
// import { Provider } from 'react-redux'

// const store = createStore()
// const App = () => {
//     <Provider store = {store}>
//     </Provider>
// }

AppRegistry.registerComponent(appName, () => App);
