import React from 'react';
import { Provider } from 'react-redux';
import Begin from './src/stack';
import store from './src/store';

export default class InitialRoot extends React.Component {
  render() {
    return (
      <Provider store={store} >
          <Begin />
      </Provider >
    );
  }
}

