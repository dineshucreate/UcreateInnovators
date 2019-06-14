import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';


const LoginForm = () => {

    let [email, setEmail] = useState('k');
    let [password, setPassword] = useState('k');



    const setEmailAddress = (email) => {
        setEmail(email)
    }
    const setPasswordd = (password) => {
        setPassword(password)
    }


    return (
        <View style={{ flex: 1 }}>
            <TextInput
                style={{
                    paddingTop: 10,
                    paddingBottom: 12,
                    fontSize: 16,
                    borderBottomWidth: 1,
                }}
                placeholder={'Email'}
                value={email}
                keyboardType={'email-address'}
                onChangeText={(email) => setEmailAddress(email)}
            />
            <TextInput
                style={{
                    paddingTop: 10,
                    paddingBottom: 12,
                    fontSize: 16,
                    borderBottomWidth: 1,
                }}
                placeholder={'Password'}
                secureTextEntry
                value={password}
                onChangeText={(password) => setPasswordd(password)}
            />
            <TouchableOpacity style={{
                backgroundColor: '#004423',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10,
                borderRadius: 5,
                marginHorizontal: 10,
                marginTop: 10,
                height: 50,
            }}
                onPress={() => {

                }}
            >
                <Text>Log In</Text>
            </TouchableOpacity>
            <Text>Values are: {email}  {password}</Text>
        </View>
    );
}

export default LoginForm;