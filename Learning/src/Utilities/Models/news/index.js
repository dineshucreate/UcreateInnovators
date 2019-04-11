export default class News {
    constructor(response) {
        alert(JSON.stringify(response))
        if (response != null) {
              this.link = response.link;
              this.title = response.title;
              if(response.thumbnails.length>0) {
                this.url = response.thumbnails[0].url;
              }
        }
    }
}