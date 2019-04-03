import Axios from 'axios'
export const consumePostAPI = (url, headerParams, loginParams, successHandler, errorHandler) => {
  Axios.post(url, loginParams, { headers: headerParams })
    .then(response => {
        successHandler(response.data)
    })
    .catch(error => {
        errorHandler(error)
    });
};

export const consumeGetAPI = (url, headerParams, successHandler, errorHandler) => {
    Axios.get(url, { headers: headerParams })
      .then(response => {
        successHandler(response.data)
      })
      .catch(error => {
          errorHandler(error)
      });
  };
