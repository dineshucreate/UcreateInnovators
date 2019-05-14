import { GETPHOTOSLISTREQUEST, PHOTOSLISTSUCCESS, PHOTOSLISTFAILURE } from './constant';

export const getPhotosList = (page) => ({
	type: GETPHOTOSLISTREQUEST,
	page
});

export const photoListSuccess = (data) => ({
	type: PHOTOSLISTSUCCESS,
	data: data
});

export const photoListFailure = () => ({
	type: PHOTOSLISTFAILURE
});
