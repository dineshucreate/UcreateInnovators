import {consumePostAPI} from '../../serverrequest'
export default class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }

    loginUser = async() => {
        const url =
      "https://footballalbum-prod-api.imfootball.me/UserAPI/api/Auth/Login";
        const headers = {
            "Ocp-Apim-Subscription-Key": '6c192d2e80bb49a8b90f6d684cf18b9b',
            "ZUMO-API-VERSION": '2.0.0',
            "Content-Type": 'application/json'
          };
        const body = {
            email:this.email,
            password:this.password
        }
        const response = await consumePostAPI(url, body, headers)
        return response
    }
}