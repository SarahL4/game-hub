import { SimpleGrid, Spinner, Text } from '@chakra-ui/react';
import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Game from '../entities/Game';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

//compendate by useGameQueryStore
// interface Props {
// 	gameQuery: GameQuery;
// }

// const GameGrid = ({ gameQuery }: Props) => {
const GameGrid = () => {
	//A hook between gameService create('/games)->HttpService.getAll
	//->apiClient.get<T>('/games)-apiClient axios create{baseURL+'/games'}
	//use hook: useGames(), and return data(games,error...)
	// const { data, error, isLoading } = useData<Game>('/games');

	const {
		data,
		isLoading,
		error,
		// isFetchingNextPage,
		fetchNextPage,
		hasNextPage,
	} = useGames(); //(gameQuery)

	const skeletons = [1, 2, 3, 4, 5, 6];

	if (error) return <Text>{error.message}</Text>;

	const fetchedGamesCount =
		data?.pages.reduce((total, page) => total + page.results.length, 0) || 0; //算每一页有几个game
	return (
		<>
			{/* Inifinite scrolling, auto loading and show when wipe down */}
			<InfiniteScroll
				dataLength={fetchedGamesCount} //This is important field to render the next data
				next={() => fetchNextPage()}
				hasMore={hasNextPage}
				loader={<Spinner />}
				// endMessage={
				// 	<p style={{ textAlign: 'center' }}>
				// 		<b>Yay! You have seen it all</b>
				// 	</p>
				// }
				// below props only if you need pull down functionality
				// refreshFunction={this.refresh}
				// pullDownToRefresh
				// pullDownToRefreshThreshold={50}
				// pullDownToRefreshContent={
				// 	<h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
				// }
				// releaseToRefreshContent={
				// 	<h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
				// }
			>
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

					{data?.pages.map((page, index) => (
						<React.Fragment key={index}>
							{page.results.map((game: Game) => (
								<GameCardContainer key={game.id}>
									<GameCard game={game} />
								</GameCardContainer>
							))}
						</React.Fragment>
					))}
				</SimpleGrid>
			</InfiniteScroll>

			{/* Load More */}
			{/* {hasNextPage && (
				<Button onClick={() => fetchNextPage()} marginY={5}>
					{isFetchingNextPage ? 'Loading...' : 'Load More'}
				</Button>
			)} */}
		</>
	);
};

export default GameGrid;
