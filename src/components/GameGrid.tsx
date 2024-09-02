import { Card, SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';

const GameGrid = () => {
	//A hook between gameService create('/games)->HttpService.getAll
	//->apiClient.get<T>('/games)-apiClient axios create{baseURL+'/games'}
	//use hook: useGames(), and return data(games,error...)
	const { games, error, isLoading, setGames, setError } = useGames();

	return (
		<>
			{isLoading && <Spinner />}
			{error && <Text color='tomato'>{error}</Text>}
			<SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={10}>
				{games.map((game) => (
					<GameCard key={game.id} game={game} />
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
