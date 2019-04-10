import React, { Component } from "react";
import { consumeGetAPI } from "../../ServerRequest";
import { AsyncStorage } from "react-native";
export default class StatsModel extends Component {
  constructor() {
    super();
  }

  async getResultsForActiveTournaments(successCallback, errorCallback) {
    const response = await AsyncStorage.getItem("user");
    const user = JSON.parse(response);
    const url =
      "https://footballalbum-prod-api.imfootball.me//MatchAPI/api/Results/GetResultsForActiveTournamentsByDateRange?endDate=2019-04-10T12:27:03Z&startDate=2019-03-27T12:27:03Z";
    // Header params to attach with Request
    const headerParams = {
      "Content-Type": "application/json",
      "ZUMO-API-VERSION": "2.0.0",
      "Ocp-Apim-Subscription-Key": "6c192d2e80bb49a8b90f6d684cf18b9b",
      "X-ZUMO-AUTH": user.accessToken
    };
    consumeGetAPI(
      url,
      headerParams,
      response => {
        successCallback(response);
      },
      error => {
        errorCallback(error);
      }
    );
  }
}
