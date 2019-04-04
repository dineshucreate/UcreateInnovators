export default class User {
  constructor(response) {
    if (response.user) {
      this.accessToken = response.access_token;
      this.firstName = response.user.firstName;
      this.lastName = response.user.lastName;
      this.email = response.user.email;
      this.userGuid = response.user.userGuid;
      response.teamInformation.forEach(dct => {
        if (dct.isDomestic) {
          this.domesticTeamId = dct.teamId;
          this.domesticTeamName = dct.teamName;
          this.domesticTeamIconUrl = dct.teamIconUrl;
        } else {
          this.internationalTeamId = dct.teamId;
          this.internationalTeamName = dct.teamName;
          this.internationalTeamIconUrl = dct.teamIconUrl;
        }
      });
    } else {
      this.accessToken = response.accessToken;
      this.firstName = response.firstName;
      this.lastName = response.lastName;
      this.email = response.email;
      this.userGuid = response.userGuid;
      this.domesticTeamId = response.teamId;
      this.domesticTeamName = response.teamName;
      this.domesticTeamIconUrl = response.teamIconUrl;
      this.internationalTeamId = response.teamId;
      this.internationalTeamName = response.teamName;
      this.internationalTeamIconUrl = response.teamIconUrl;
    }
  }
}
