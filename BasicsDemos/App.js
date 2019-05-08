import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Begin from './RouteCompount';




export default class RouterComponent extends React.Component {
 constructor(props){
   super(props)
 }
 render() {
   return (
     <Provider store={store} >
       <Begin/>
     </Provider >
   );
 }
}