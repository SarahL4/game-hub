import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Genre } from '../services/InterfaceServices';
import genres from '../data/genres';
import ms from 'ms';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: apiClient.getAll,
		staleTime: ms('24'),
		initialData: genres,
		// initialData: { count: genres.length, results: genres, next: null },
	});

export default useGenres;
