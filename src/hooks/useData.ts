import { useEffect, useState } from 'react';
import { FecthResponse } from '../services/game-service';
import { AxiosRequestConfig, CanceledError } from 'axios';
import create from '../services/http-service';

const useData = <T>(
	endpoint: string,
	requestConfig?: AxiosRequestConfig,
	deps?: any[]
) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(
		() => {
			//const controller = new AbortController();
			setLoading(true);

			const { request, cancel } = create(endpoint, requestConfig).getAll<
				FecthResponse<T>
			>();
			// apiClient
			// 	.get<FecthResponse<T>>(endpoint, {
			// 		signal: controller.signal,
			// 		...requestConfig,
			// 	})
			request
				.then((response) => {
					setData(response.data.results);
					setLoading(false);
				})
				.catch((err) => {
					if (err instanceof CanceledError) return;
					setError(err.message);

					setLoading(false);
				});

			// return () => controller.abort();
			return () => cancel();
		},
		deps ? [...deps] : []
	);

	return { data, error, isLoading };
};

export default useData;
