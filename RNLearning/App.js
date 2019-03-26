import React from 'react';
import Begin from './src/RouterComponent';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
const { store, persistor } = configureStore();

export default class RouterComponent extends React.Component {
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