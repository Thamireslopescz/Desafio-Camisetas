import axios from 'axios';

const apiService = axios.create({
	baseURL: 'https://api-camisetas.onrender.com/',
});

export default apiService;

export interface ResponseAPI {
	ok?: boolean;
	code?: number;
	message?: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	data?: any;
}
