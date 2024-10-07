import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

// export interface GameQuery {
// 	genreId?: number;
// 	platformId?: number;
// 	sortOrder: string;
// 	searchText: string;
// }

function App() {
	// aside bar 和 main的父母是app, 在这里共商大计
	// const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	// const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
	// 	null
	// );
	// const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);
	return (
		//base:平时时候正常小屏幕. 大屏全显
		<Grid
			templateAreas={{ base: `"nav""main"`, lg: `"nav nav""aside main"` }}
			border='1px solid black'
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem area='nav' border='1px solid blue'>
				<NavBar
				// onSearch={(searchText) => {setGameQuery({ ...gameQuery, searchText: searchText });}}
				/>
			</GridItem>
			{/* Show only when it large screen (laptop) 1024-1440px */}
			<Show above='lg'>
				<GridItem area='aside' bg='gold' border='1px solid blue' padding={5}>
					<GenreList
					// onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
					// selectedGenreId={gameQuery.genreId}
					/>
				</GridItem>
			</Show>
			<GridItem area='main' bg='green' border='1px solid purple'>
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
}

export default App;
