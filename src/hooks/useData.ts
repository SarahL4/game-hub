import { useEffect, useState } from 'react';
import { CanceledError } from '../services/api-client';
import { FecthResponse } from '../services/game-service';
import create from '../services/http-service';

const useData = <T>(endpoint: string) => {
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		const { request, cancel } = create(endpoint).getAll<FecthResponse<T>>();
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

		return () => cancel();
	}, []);

	return { data, error, isLoading, setData, setError };
};

export default useData;
