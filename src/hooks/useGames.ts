import { useQuery } from '@tanstack/react-query';
import { GameQuery } from '../App';
import { FecthResponse, Game } from '../services/InterfaceServices';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) =>
	useQuery<FecthResponse<Game>, Error>({
		//gameQuery: the query object that reveive in this hook
		//so any the the values in this object changes, react query will refresh the game from backend
		queryKey: ['games', gameQuery],
		queryFn: () =>
			apiClient.getAll({
				params: {
					genres: gameQuery.genre?.id,
					parent_platforms: gameQuery.platform?.id,
					ordering: gameQuery.sortOrder,
					search: gameQuery.searchText,
				},
			}),
		staleTime: 1 * 10 * 1000, //10s
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
