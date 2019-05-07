import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import Begin from './src/RouterComponent';

const { store, persistor } = configureStore();

console.disableYellowBox = true;
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
