import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import useGames from '../hooks/useGames';

const GameGrid = () => {
	//A hook between gameService create('/games)->HttpService.getAll
	//->apiClient.get<T>('/games)-apiClient axios create{baseURL+'/games'}
	//use hook: useGames(), and return data(games,error...)
	// const { data, error, isLoading } = useData<Game>('/games');
	const { data, isLoading } = useGames();
	const skeletons = [1, 2, 3, 4, 5, 6];
	return (
		<>
			{/* {isLoading && <Spinner />} */}
			{/* {error && <Text color='tomato'>{error}</Text>} */}
			<SimpleGrid
				columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
				spacing={3}
				padding='10px'
			>
				{isLoading &&
					skeletons.map((s) => (
						<GameCardContainer key={s}>
							<GameCardSkeleton />
						</GameCardContainer>
					))}
				{data.map((game) => (
					<GameCardContainer key={game.id}>
						<GameCard game={game} />
					</GameCardContainer>
				))}
			</SimpleGrid>
		</>
	);
};

export default GameGrid;
