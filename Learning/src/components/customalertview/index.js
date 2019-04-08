import {Alert} from 'react-native'
export default customAlertView = (title, message, firstButtonTitle, secondButtonTitle, 
    firstButtonCompletionHandler, secondButtonCompletionHandler) => {
        Alert.alert(title, message,[
            {'text':firstButtonTitle,style:'destructive', onPress:()=> {
                firstButtonCompletionHandler()
            }},
            {'text':secondButtonTitle, onPress:()=> {
                secondButtonCompletionHandler()
            }}
        ])
}