import React from 'react';
import Begin from './src/stack';
import { Provider } from 'react-redux'
import store  from './src/store';

export default class InitialRoot extends React.Component {
  render() {
    return (
      <Provider store = {store} >
          <Begin />
      </Provider >
    );
  }
}

