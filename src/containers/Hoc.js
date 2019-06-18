import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import multiply from './Multiply';
import { addition, subract } from './Addition';

// var numbers = [2,3,4,5,8];
// var numbers1 = [1,2,3,4,5];
// var numbers2 = [5,6,7,8,9];

// var value = () => vals => vals+numbers[4]

// console.log(value()(5));

// var value1 = string1 = (value) => {
//         return (name) => `Hey ${name}, ${value}`
// }

// var value2 = value1('How are you?');
// var value3 = value1('Are you there?');

// console.log(value2('Aman'))
// console.log(value3('Aman'))

// //Squaring 
// var square = (x) => x*x 
// var cube = (x) => x*x*x 

// console.log(numbers.map(square));
// console.log(numbers.map(cube));

// // squaring regular

class WrappedParent extends PureComponent {

    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text>HOC</Text>
                {multiply(addition(2)(5))}
                {multiply(subract(2)(5))}
            </View>
        );
    }
}
export default WrappedParent;