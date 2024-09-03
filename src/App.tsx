import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';

function App() {
	return (
		//base:平时时候正常小屏幕. 大屏全显
		<Grid
			templateAreas={{ base: `"nav""main"`, lg: `"nav nav""aside main"` }}
			border='5px solid black'
		>
			<GridItem area='nav' border='5px solid blue'>
				<NavBar />
			</GridItem>
			{/* Show only when it large screen (laptop) 1024-1440px */}
			<Show above='lg'>
				<GridItem area='aside' bg='gold' border='5px solid blue'>
					Aside
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area='main' bg='green' border='5px solid purple'>
				<GameGrid />
			</GridItem>
			<GridItem></GridItem>
		</Grid>
	);
}

export default App;
