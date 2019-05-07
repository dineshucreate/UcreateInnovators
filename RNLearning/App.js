import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import { StackLogin, Stack } from './src/RouterComponent';

const { store, persistor } = configureStore();

console.disableYellowBox = true;
export default class RouterComponent extends React.Component {
  render() {
    const stateObject = store.getState();
    const loginData = stateObject.login.loginData;
    return (
      <Provider store={store} >
        <PersistGate loading={null} persistor={persistor}>
        {loginData ? 
          <Stack /> : <StackLogin />
        }
        </PersistGate>
      </Provider >
    );
  }
}
