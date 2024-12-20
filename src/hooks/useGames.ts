import { useInfiniteQuery } from '@tanstack/react-query';
import ms from 'ms';
import APIClient from '../services/api-client';
import UseGameQueryStore from '../store';
import FetchResponse from '../entities/FetchResponse';
import Game from '../entities/Game';

const apiClient = new APIClient<Game>('/games');

// const useGames = (gameQuery: GameQuery) =>
const useGames = () => {
	const gameQuery = UseGameQueryStore((s) => s.gameQuery);

	return useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genreId,
					parent_platforms: gameQuery.platformId,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		// staleTime: 24 * 60 * 60 * 1000, //24h. 10s=1 * 10 * 1000
		staleTime: ms('24'),
		initialPageParam: 1,
	});
};

// const useGames = (gameQuery: GameQuery) =>
// 	useData<Game>(
// 		'/games',
// 		{
// 			params: {
// 				genres: gameQuery.genre?.id,
// 				platforms: gameQuery.platform?.id,
// 				ordering: gameQuery.sortOrder,
// 				search: gameQuery.searchText,
// 			},
// 		},
// 		[gameQuery]
// 	);

// const [games, setGames] = useState<Game[]>([]);
// const [error, setError] = useState('');
// const [isLoading, setLoading] = useState(false);

// useEffect(() => {
// 	setLoading(true);

// 	const { request, cancel } = gameService.getAll<FecthGamesResponse>();
// 	request
// 		.then((response) => {
// 			setGames(response.data.results);
// 			setLoading(false);
// 		})
// 		.catch((err) => {
// 			if (err instanceof CanceledError) return;
// 			setError(err.message);

// 			setLoading(false);
// 		});

// 	return () => cancel();
// }, []);

// return { games, error, isLoading, setGames, setError };

export default useGames;
