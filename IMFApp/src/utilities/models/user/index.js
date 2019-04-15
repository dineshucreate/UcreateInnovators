import { consumePOSTAPI } from '../../serverrequest'
export default class User {
    constructor(response) {
    }


    loginUser = (email, password, successCallback, errorCallback) => {
        const url =
            "https://footballalbum-prod-api.imfootball.me/UserAPI/api/Auth/Login";
        // Header params to attach with Request
        var headerParams = {
            "Content-Type": "application/json",
            "ZUMO-API-VERSION": "2.0.0",
            "Ocp-Apim-Subscription-Key": "6c192d2e80bb49a8b90f6d684cf18b9b"
        };

        // Body params to attach with Request
        const loginParams = {
            email: email,
            password: password
        };
        consumePOSTAPI(url, loginParams, headerParams, (response) => {
            successCallback(response)
        }, (error) => {
            errorCallback(error)
        })
    }
}