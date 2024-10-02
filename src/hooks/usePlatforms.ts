import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { FecthResponse, Platform } from '../services/game-service';
import platforms from '../assets/data/platforms';

const usePlatforms = () =>
	useQuery({
		queryKey: ['platforms'],
		queryFn: () =>
			apiClient
				.get<FecthResponse<Platform>>('/platforms/lists/parents')
				.then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: { count: platforms.length, results: platforms },
	});

export default usePlatforms;
