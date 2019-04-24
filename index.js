
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import FlexboxExample from './src/containers/Flexbox';
import NativeCall from './src/containers/nativecall';
import Login from './Login';

AppRegistry.registerComponent(appName, () => Login);
