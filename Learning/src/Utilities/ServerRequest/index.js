import Axios from "axios";
export const consumePostAPI = async (url, body, headerParams) => {
  try {
    console.log('url is ' + url)
    console.log('body is ' + JSON.stringify(body))
    console.log('headerParams is ' + JSON.stringify(headerParams))
    const response = await Axios.post(url, body, { headers: headerParams });
    return response;
  } catch (error) {
    return error;
  }
};

export const consumeGetAPI = async (url, headerParams) => {
  try {
    const response = await Axios.get(url, { headers: headerParams });
    return response;
  } catch (error) {
    return error;
  }
};
