/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import Splash from './src/components/splash.js'
// import login from './src/components/login'
import signup from './src/components/signup'
// import App from './src/App.js'

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => signup);
