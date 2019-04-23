import { consumePostApi } from "../../serverrequest";
import * as constants from "../../../constants";
export default class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  loginUser = (successCallback, failureCallback) => {
    const url =
      "https://footballalbum-prod-api.imfootball.me/UserAPI/api/Auth/Login";
    // Header params to attach with Request
    const headers = {
      "Content-Type": constants.contentType,
      "ZUMO-API-VERSION": constants.apiVersion,
      "Ocp-Apim-Subscription-Key": constants.subscriptionKey
    };
    // Body params to attach with Request
    const body = {
      email: this.email,
      password: this.password
    };

    consumePostApi(
      url,
      body,
      headers,
      response => {
        successCallback(response);
      },
      error => {
        failureCallback(error);
      }
    );
  };
}
