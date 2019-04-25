import axios from 'axios'

export const consumePostAPI = async(url, body, headers) => {
    try {
        const response = await axios.post(url, body, {headers:headers})
        return response
    } catch(error) {
        return error
    }
    
}