import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Game } from '../services/InterfaceServices';
import ms from 'ms';

const apiClient = new APIClient<Game>('/games');

const UseGame = (slug: number | string) => {
	// const { data: games } = useGames();
	// return games?.results.find((g) => g.id === id);
	return useQuery({
		queryKey: ['games', slug],
		queryFn: () => apiClient.get(slug),
		staleTime: ms('24'),
	});
};

export default UseGame;
