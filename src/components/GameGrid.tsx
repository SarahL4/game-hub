import { SimpleGrid, Text } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames from '../hooks/useGames';
import { GameQuery } from '../App';
import { Game } from '../services/game-service';

interface Props {
	gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
	//A hook between gameService create('/games)->HttpService.getAll
	//->apiClient.get<T>('/games)-apiClient axios create{baseURL+'/games'}
	//use hook: useGames(), and return data(games,error...)
	// const { data, error, isLoading } = useData<Game>('/games');
	const { data, isLoading, error } = useGames(gameQuery);
	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	return (
		<SimpleGrid
			columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
			spacing={6}
			padding='10px'
		>
			{isLoading &&
				skeletons.map((s) => (
					<GameCardContainer key={s}>
						<GameCardSkeleton />
					</GameCardContainer>
				))}
			{data?.results.map((game: Game) => (
				<GameCardContainer key={game.id}>
					<GameCard game={game} />
				</GameCardContainer>
			))}
		</SimpleGrid>
	);
};

export default GameGrid;
