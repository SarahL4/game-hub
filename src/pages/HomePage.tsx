import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import GameHeading from '../components/GameHeading';
import GenreList from '../components/GenreList';
import PlatformSelector from '../components/PlatformSelector';
import SortSelector from '../components/SortSelector';

const HomePage = () => {
	return (
		<Grid
			// templateAreas={{ base: `"nav""main"`, lg: `"nav nav""aside main"` }}
			templateAreas={{ base: `"main"`, lg: `"aside main"` }}
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			{/* <GridItem area='nav' border='1px solid blue'>
				<NavBar
				// onSearch={(searchText) => {setGameQuery({ ...gameQuery, searchText: searchText });}}
				/>
			</GridItem> */}
			{/* Show only when it large screen (laptop) 1024-1440px */}
			<Show above='lg'>
				<GridItem area='aside' padding={5}>
					<GenreList
					// onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
					// selectedGenreId={gameQuery.genreId}
					/>
				</GridItem>
			</Show>
			<GridItem area='main'>
				<Box paddingLeft={2}>
					<Flex>
						<GameHeading />
					</Flex>
					<Flex marginBottom={5}>
						<Box marginRight={5}>
							<PlatformSelector
							// onSelectPlatform={(platform) =>setGameQuery({ ...gameQuery, platformId: platform?.id })}
							// selectedPlatformId={gameQuery.platformId}
							/>
						</Box>
						<SortSelector
						// sortOrder={gameQuery.sortOrder}
						// onSelectSortOrder={(sortOrder) =>setGameQuery({ ...gameQuery, sortOrder })}
						/>
					</Flex>
				</Box>
				<GameGrid
				// gameQuery={gameQuery}
				// selectedGenre={gameQuery.genre}
				// selectedPlatform={gameQuery.platform}
				/>
			</GridItem>
			<GridItem></GridItem>
		</Grid>
	);
};

export default HomePage;
