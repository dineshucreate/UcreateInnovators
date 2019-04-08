/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Splash from './src/components/splash.js'
import Login from './src/components/login.js'
// import App from './src/App.js'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Login);
