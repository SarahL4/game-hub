import axios, { AxiosRequestConfig } from 'axios';
import { FecthResponse } from './InterfaceServices';

const axiosInstance = axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '47942090cfc4468cbd3cca404ed7045f',
	},
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	getAll = (config: AxiosRequestConfig) => {
		return axiosInstance
			.get<FecthResponse<T>>(this.endpoint, config)
			.then((res) => res.data);
	};
}

export default APIClient;
