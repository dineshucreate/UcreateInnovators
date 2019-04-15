import axios from "axios";

export const apiLoginPost=(url,body,header,successCallback,failureCallback)=>{
    axios.post(url,body,{headers:header}).then(function (response) {
        console.log(response);
        successCallback(response)
      })
      .catch(function (error) {
        console.log(error);
        failureCallback(error)
      });
}

export const apiLoginGet=(url,header,successCallback,failureCallback)=>{
    axios.get(url,{headers:header}).then(function (response) {
        console.log(response);
        successCallback(response)
      })
      .catch(function (error) {
        console.log(error);
        failureCallback(error)
      });
}