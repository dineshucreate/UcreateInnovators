import React from 'react';
import { createAppContainer } from 'react-navigation';
import stack from './src/navigationStack';

export default class NavigationComponentInitial extends React.Component {
  render() {
    const Begin = createAppContainer(stack);
    return (
      <Begin />
    );
  }
}