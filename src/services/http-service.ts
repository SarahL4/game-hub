// import apiClient from './api-client';
// import { AxiosRequestConfig } from 'axios';
// import { FecthResponse } from './InterfaceServices';

// class HttpService<T> {
// 	endpoint: string;
// 	// requestConfig?: AxiosRequestConfig;

// 	constructor(endpoint: string) {
// 		this.endpoint = endpoint;
// 		// this.requestConfig = requestConfig;
// 	}

// 	getAll = (config: AxiosRequestConfig) => {
// 		return apiClient
// 			.get<FecthResponse<T>>(this.endpoint, config)
// 			.then((res) => res.data);
// 	};
// }

// // const create = (endpoint: string) => new HttpService(endpoint);

// export default HttpService;
