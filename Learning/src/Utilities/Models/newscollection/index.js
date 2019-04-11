import { consumeGetAPI } from "../../serverrequest";
import { AsyncStorage } from "react-native";
import { subscriptionKey, apiVersion, contentType } from "../../constants";
import News from "../news";
export default class NewsCollection {
  constructor() {
    this.state = {
      arrNews: []
    };
  }

  async getNews(successCallback, errorCallback) {
    const response = await AsyncStorage.getItem("user");
    const user = JSON.parse(response);
    const url =
      "https://footballalbum-prod-api.imfootball.me//NewsAPI/api/News/Get?pageNumber=1&pageSize=20&lastDate=2019-03-11T05:56:01Z";
    // Header params to attach with Request
    const headerParams = {
      "Content-Type": contentType,
      "ZUMO-API-VERSION": apiVersion,
      "Ocp-Apim-Subscription-Key": subscriptionKey,
      "X-ZUMO-AUTH": user.accessToken
    };
    consumeGetAPI(
      url,
      headerParams,
      response => {
        response.forEach(dct => {
          let news = new News(dct);
          this.state.arrNews.push(news)
        });
        successCallback(this.state.arrNews);
      },
      error => {
        errorCallback(error);
      }
    );
  }
}
