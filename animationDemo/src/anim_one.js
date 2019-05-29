

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Animated, Easing, TouchableOpacity } from 'react-native';

class AnimOne extends Component {
    constructor() {
        super()
        this.state = {
            reset: false,
            redsquare: new Animated.Value(1)
            // redsquare: new Animated.ValueXY(0, 0)
        }
    }

    reloadAnimation = () => {
        if (this.state.reset) {
            this.setState({ reset: false })
            this.resetAnimation(0, 0)

        } else {

            this.setState({ reset: true })
            this.resetAnimation(100, 300)
        }
    }

    resetAnimation = (xvValue, yValue) => {

        // if we need to add multiple animations in siquence use Animated.sequence or Animated.parallel
        Animated.timing(this.state.redsquare, {
            toValue: 0,
            duration: 2000,
            delay: 10,

        }).start();
        // Animated.timing(this.state.redsquare, {
        //     toValue: { x: xvValue, y: yValue },
        //     duration: 2000,
        //     delay: 10,
        //     easing: Easing.elastic(2)
        // }).start();
    }

    render() {
        return (
            <View>
                <Animated.View
                    style={{
                        opacity: this.state.redsquare,
                        transform: [{
                            rotateX: this.state.redsquare.interpolate({
                                inputRange: [0, 0.5, 1],
                                outputRange: ['0deg', '180deg', '0deg']
                            })
                        }]
                    }}>
                    {/* style={this.state.redsquare.getLayout()}> */}
                    <View style={styles.square}></View>
                </Animated.View>
                <TouchableOpacity style={{ backgroundColor: 'gray', height: 40, width: 85, alignSelf: 'flex-end', marginRight: 10, }}
                    onPress={this.reloadAnimation}>
                    <Text style={{ fontSize: 21, marginLeft: 5, marginTop: 5 }}>Animate</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    square: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
});


export default AnimOne;