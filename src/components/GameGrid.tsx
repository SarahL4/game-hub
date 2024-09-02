import { Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
	//A hook between gameService create('/games)->HttpService.getAll
	//->apiClient.get<T>('/games)-apiClient axios create{baseURL+'/games'}
	//use hook: useGames(), and return data(games,error...)
	const { games, error, isLoading, setGames, setError } = useGames();

	return (
		<>
			{isLoading && <Spinner />}
			{error && <Text color='tomato'>{error}</Text>}
			<ul>
				{games.map((game) => (
					<li key={game.id}>{game.name}</li>
				))}
			</ul>
		</>
	);
};

export default GameGrid;
