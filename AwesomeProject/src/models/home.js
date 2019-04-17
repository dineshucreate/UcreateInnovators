import { consumerGetAPI, consumePOSTAPI } from './serverRequest';
export default class HomeModel {
	getEmployeeList = (successBlock, failureBlock) => {
		const url = 'http://dummy.restapiexample.com/api/v1/employees';
		consumerGetAPI(
			url,
			(response) => {
				successBlock(response);
			},
			(error) => {
				failureBlock(error);
			}
		);
	};

	updateEmployeeListWithName = (employeeObj, successBlock, failureBlock) => {
		const url = 'http://dummy.restapiexample.com/api/v1/create';
		consumePOSTAPI(
			url,
			employeeObj,
			(response) => {
				successBlock(response);
			},
			(error) => {
				failureBlock(error);
			}
		);
	};
}
