import { GameQuery } from '../App';
import { Game } from '../services/game-service';
import useData from './useData';

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				search: gameQuery.searchInput,
			},
		},
		[gameQuery]
	);
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
