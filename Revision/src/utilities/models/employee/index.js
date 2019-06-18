import {consumeGetRequest} from '../../serverrequest'
export default class employee {
    getEmployees = async() => {
        const response = await consumeGetRequest('http://dummy.restapiexample.com/api/v1/employees',null, null)
        return response
    }
}