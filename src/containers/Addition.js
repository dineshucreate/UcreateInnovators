import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

const addition = (x) => (y) => (
    <View>
    <Text>Addition: {x+y} </Text>
</View>
);

export default addition;