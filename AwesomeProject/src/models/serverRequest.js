import Axios from 'axios';

export const consumerGetAPI = (url, succussBlock, failureBlock) => {
	Axios.get(url, { headers: null })
		.then((response) => {
			console.log(response);
			succussBlock(response);
		})
		.catch((error) => {
			failureBlock(error);
		});
};

export const consumePOSTAPI = (url, body, successBlock, failureBlock) => {
	Axios.post(url, body)
		.then((response) => {
			successBlock(response);
		})
		.catch((error) => {
			failureBlock(error);
		});
};
