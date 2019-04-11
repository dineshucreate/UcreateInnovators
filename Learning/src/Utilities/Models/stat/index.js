import React , {Component} from 'react'
export default class Stat {
    constructor(response) {
        if (response != null) {
              this.homeScore = response.homeScore;
              this.awayScore = response.awayScore;
              this.awayTeamImageUrl = response.awayTeamImageUrl;
              this.homeTeamImageUrl = response.homeTeamImageUrl;
              this.homeTeamName = response.homeTeamName;
              this.awayTeamName = response.awayTeamName;
        }
    }
}