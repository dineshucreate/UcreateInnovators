/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import landing from './src/containers/landing';
import login from './src/containers/login';

AppRegistry.registerComponent(appName, () => login);
