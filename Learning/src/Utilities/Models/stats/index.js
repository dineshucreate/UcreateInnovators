import React, { Component } from "react";
import { consumeGetAPI } from "../../serverrequest";
import { AsyncStorage } from "react-native";
import Stat from "../stat";
import {subscriptionKey, apiVersion, contentType} from '../../constants'
export default class StatsModel extends Component {
  constructor() {
    super();
    this.state = {
      arrResults: []
    };
  }

  async getResultsForActiveTournaments() {
    const response = await AsyncStorage.getItem("user");
    const user = JSON.parse(response);
    const url =
      "https://footballalbum-prod-api.imfootball.me//MatchAPI/api/Results/GetResultsForActiveTournamentsByDateRange?endDate=2019-04-10T12:27:03Z&startDate=2019-03-27T12:27:03Z";
    // Header params to attach with Request
    const headerParams = {
      "Content-Type": contentType,
      "ZUMO-API-VERSION": apiVersion,
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "X-ZUMO-AUTH": user.accessToken
    };
    const responseObj = await consumeGetAPI(url, headerParams)
    return responseObj
  }
}
