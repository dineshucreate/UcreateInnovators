
import { AppRegistry, Platform } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import FlexboxExample from './src/containers/Flexbox';
import NativeCall from './src/containers/nativecall';
import Login from './Login';
import GooglemapIntegration from './src/Googlemaps';
import NavigationMap from './src/Googlemaps/AnimateNavigation';
import Home from './src/Facebook/Home';
// import Geocoder from 'react-native-geocoding';
// Geocoder.init('AIzaSyBP-lbtyr9rjySX_rYnDAoVOvKHe9_3mg0');
AppRegistry.registerComponent(appName, () => Home);
 