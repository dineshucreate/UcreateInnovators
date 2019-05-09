import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Begin from './RouteCompount';
import Splash from './SplashScreen'




export default class RouterComponent extends React.Component {
 constructor(props){
   super(props)
 }
 render() {
   return (
     <Provider store={store} >
       <Splash/>
     </Provider >
   );
 }
}