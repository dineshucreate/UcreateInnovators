import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

export default class FB extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      name: ''
    };
  }
  
  render() {
      const { name, avatar } = this.props.navigation.state.params;
    return (
      <View style={styles.container}>
        <Text style={styles.name}>Name: {name}</Text>
        <Image
                style={styles.image}
                source={{ uri: avatar }}
        />
      </View>
    );
  }
}
