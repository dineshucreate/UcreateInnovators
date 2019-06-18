import axios from 'axios'
export const consumeGetRequest = async(url, header, body) => {
    const response = await axios.get(url,null)
    return response
}