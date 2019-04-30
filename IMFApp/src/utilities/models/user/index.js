import { consumePOSTAPI } from '../../serverrequest'
export default class User {
    constructor(response) {
    }


    loginUser = async (email, password) => {
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
        try {
            const responce = await consumePOSTAPI(url, loginParams, headerParams);
            return responce;
        } catch (error) {
            return error;
        }
    }
}