import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store/index';
import Route from './src/routeNavigation/index'



export default class RouteBegin extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store} >
        <Route />
      </Provider >
    );
  }
}