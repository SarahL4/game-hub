import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import { Genre } from './services/genre-service';
import PlatformSelector from './components/PlatformSelector';
import { Platform } from './services/game-service';

export interface GameQuery {
	genre: Genre | null;
	platform: Platform | null;
}

function App() {
	// aside bar 和 main的父母是app, 在这里共商大计
	// const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
	// const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
	// 	null
	// );
	const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

	return (
		//base:平时时候正常小屏幕. 大屏全显
		<Grid
			templateAreas={{ base: `"nav""main"`, lg: `"nav nav""aside main"` }}
			border='5px solid black'
			templateColumns={{
				base: '1fr',
				lg: '200px 1fr',
			}}
		>
			<GridItem area='nav' border='5px solid blue'>
				<NavBar />
			</GridItem>
			{/* Show only when it large screen (laptop) 1024-1440px */}
			<Show above='lg'>
				<GridItem area='aside' bg='gold' border='5px solid blue' padding={5}>
					Aside
					<GenreList
						onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
						selectedGenre={gameQuery.genre}
					/>
				</GridItem>
			</Show>
			<GridItem area='main' bg='green' border='5px solid purple'>
				<PlatformSelector
					selectedPlatform={gameQuery.platform}
					onSelectPlatform={(platform) =>
						setGameQuery({ ...gameQuery, platform })
					}
				/>
				<GameGrid
					gameQuery={gameQuery}
					// selectedGenre={gameQuery.genre}
					// selectedPlatform={gameQuery.platform}
				/>
			</GridItem>
			<GridItem></GridItem>
		</Grid>
	);
}

export default App;
