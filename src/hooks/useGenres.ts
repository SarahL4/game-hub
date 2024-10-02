import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Genre } from '../services/InterfaceServices';
import genres from '../data/genres';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: 10 * 1000,
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
