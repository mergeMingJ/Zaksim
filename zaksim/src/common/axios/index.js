import axios from 'axios';

const axiosInstance = axios.create({
	headers: {
		'Access-Control-Allow-Origin': '*',
		'Access-Control-Allow-Headers': 'Content-Type',
		'Content-Type': 'application/json',

		// 등등의 header
	},
	baseURL: 'http://localhost:3000', // baseUrl
});

export default axiosInstance;