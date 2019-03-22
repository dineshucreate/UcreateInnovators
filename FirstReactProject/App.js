import React from 'react';
import { createAppContainer } from 'react-navigation';
import NavigationComponent from './src/NavigationComponent';

export default class NavigationComponentInitial extends React.Component {
  render() {
    const Begin = createAppContainer(NavigationComponent);
    return (
        <Begin />
    );
  }
}  