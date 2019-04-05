import React from 'react';
import { createAppContainer } from 'react-navigation';
import stack from './src/stack';
import drawer from './src/drawer';
import tab from './src/tab';

export default class NavigationComponentInitial extends React.Component {
  render() {
    const Begin = createAppContainer(tab);
    return (
        <Begin />
    );
  }
}