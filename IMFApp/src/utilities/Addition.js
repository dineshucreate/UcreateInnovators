import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

export const addition = (x) => (y) => (
    <View style={{ width: '100%', height: 40, backgroundColor: 'red' }}>
        <Text>Addition: {x + y} </Text>
    </View>
);

export const subract = (x) => (y) => (
    <View style={{ width: '100%', height: 40, backgroundColor: 'brown' }}>
        <Text>Subtract: {x - y} </Text>
    </View>
);
