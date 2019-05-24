import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Begin from './src/stack';
import configureStore from './src/configureStore';

const { store, persistor } = configureStore();

export default class InitialRoot extends React.Component {
  render() {
    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
          <Begin />
          </PersistGate>
      </Provider >
    );
  }
}

