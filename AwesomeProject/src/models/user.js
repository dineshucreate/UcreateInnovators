import { consumerGetAPI } from './serverRequest';
export default class User {
	constructor() {}
	loginUserAPI = (email, password, successBlock, failureBlock) => {
		console.log(email, password);
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

	testGetMethod = (url, sBlock, fBlock) => {
		consumerGetAPI(
			url,
			(reponse) => {
				sBlock(reponse);
			},
			(error) => {
				fBlock(error);
			}
		);
	};
}
