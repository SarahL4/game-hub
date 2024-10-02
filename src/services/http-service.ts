// import apiClient from './api-client';
// import { AxiosRequestConfig } from 'axios';

// // interface Entity {
// // 	id: number;
// // }

// class HttpService {
// 	endpoint: string;
// 	requestConfig?: AxiosRequestConfig;

// 	constructor(endpoint: string, requestConfig?: AxiosRequestConfig) {
// 		this.endpoint = endpoint;
// 		this.requestConfig = requestConfig;
// 	}

// 	getAll<T>() {
// 		const controller = new AbortController();
// 		const request = apiClient.get<T>(this.endpoint, {
// 			signal: controller.signal,
// 			...this.requestConfig,
// 		});

// 		return { request, cancel: () => controller.abort() };
// 	}
// }

// const create = (endpoint: string, requestConfig?: AxiosRequestConfig) =>
// 	new HttpService(endpoint, requestConfig);
// export default create;
