import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import Begin from './src/RouterComponent';




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