import { useQuery } from '@tanstack/react-query';
import { Platform } from '../services/InterfaceServices';
import APIClient from '../services/api-client';
import platforms from '../data/platforms';
import ms from 'ms';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: apiClient.getAll,
		staleTime: ms('24'), //24h
		// staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: platforms,
		// initialData: {
		// 	count: platforms.length,
		// 	results: platforms,
		// 	next: null,
		// },
	});

export default usePlatforms;
