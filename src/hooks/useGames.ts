import { useEffect, useState } from 'react';
import gameService, {
	FecthGamesResponse,
	Game,
} from '../services/game-service';
import { CanceledError } from '../services/api-client';

const useGames = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		const { request, cancel } = gameService.getAll<FecthGamesResponse>();
		request
			.then((response) => {
				setGames(response.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);

				setLoading(false);
			});

		return () => cancel();
	}, []);

	return { games, error, isLoading, setGames, setError };
};

export default useGames;
