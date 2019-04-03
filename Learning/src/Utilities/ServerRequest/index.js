import Axios from 'axios'
export const consumePostAPI = (url, headerParams, loginParams, succesHandler, errorHandler) => {
  Axios.post(url, loginParams, { headers: headerParams })
    .then(response => {
        succesHandler(response.data)
    })
    .catch(error => {
        errorHandler(error)
    });
};

export const consumeGetAPI = (url, headerParams, loginParams, succesHandler, errorHandler) => {
    Axios.get(url, loginParams, { headers: headerParams })
      .then(response => {
          succesHandler(response.data)
      })
      .catch(error => {
          errorHandler(error)
      });
  };
