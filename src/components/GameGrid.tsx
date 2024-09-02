import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { Text } from '@chakra-ui/react';

interface Game {
	id: number;
	name: string;
}

interface FecthGamesRespons {
	count: number;
	results: Game[];
}

const GameGrid = () => {
	const [games, setGames] = useState<Game[]>([]);
	const [error, setError] = useState('');

	useEffect(() => {
		apiClient
			.get<FecthGamesRespons>('/gamess')
			.then((response) => setGames(response.data.results))
			.catch((err) => setError(err.message));
	});

	return (
		<>
			{error && <Text color='tomato'>{error}</Text>}
			<ul>
				{games.map((game: Game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
