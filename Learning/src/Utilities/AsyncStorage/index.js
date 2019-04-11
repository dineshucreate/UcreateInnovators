import { AsyncStorage } from "react-native";
import User from '../models/User'
export const saveToAsyncStorage = async (response, callback) => {
    let user = new User(response)
    await AsyncStorage.setItem('user', JSON.stringify(user)).then(()=> {
        callback(user)
    }).catch((error)=> {
       alert(error)
    })
};
