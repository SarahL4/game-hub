import { useInfiniteQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FetchResponse, Game } from '../services/InterfaceServices';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
	useInfiniteQuery<FetchResponse<Game>, Error>({
		queryKey: ['games', gameQuery],
		queryFn: ({ pageParam = 1 }) =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
					page: pageParam,
				},
			}),
		getNextPageParam: (lastPage, allPages) => {
			return lastPage.next ? allPages.length + 1 : undefined;
		},
		staleTime: 1 * 10 * 1000, //10s
		initialPageParam: 1,
		// keepPreviousData: true,
	});

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
