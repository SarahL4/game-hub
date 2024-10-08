import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Screenshoot } from '../services/entities';

const useScreeenshots = (gameId: number) => {
	const apiClient = new APIClient<Screenshoot>(`/games/${gameId}/screenshots`);
	return useQuery({
		queryKey: ['screenshots', gameId],
		queryFn: apiClient.getAll,
	});
};

export default useScreeenshots;
