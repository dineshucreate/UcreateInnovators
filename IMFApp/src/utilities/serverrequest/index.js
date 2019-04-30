import Axios from "axios";

export const consumeGetAPI = (url, headers, successCallback, failureCallback) => {
    Axios.get(url, { headers: headers }).then((response) => {
        successCallback(response)
    }).catch((error) => {
        failureCallback(error)
    })
}

export const consumePOSTAPI = async (url, body, headers) => {
    try {
        const responce = await Axios.post(url, body, { headers: headers })
        return responce;
    } catch (error) {
        return error;
    }
}

// Methods using callbacks
// export const consumePOSTAPI = async ( url, body, headers, successCallback, failureCallback) => {
//     Axios.post(url, body, { headers: headers }).then((response) => {
//         successCallback(response)
//     }).catch((error) => {
//         failureCallback(error)
//     })
// }

// export const consumeGetAPI = (url, headers, successCallback, failureCallback) => {
//     Axios.get(url, { headers: headers }).then((response) => {
//         successCallback(response)
//     }).catch((error) => {
//         failureCallback(error)
//     })
// }