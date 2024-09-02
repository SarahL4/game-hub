import { Grid, GridItem, Show } from '@chakra-ui/react';
import './App.css';
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';

function App() {
	return (
		//base:平时时候正常小屏幕. 大屏全显
		<Grid templateAreas={{ base: `"nav""main"`, lg: `"nav nav""aside main"` }}>
			<GridItem area='nav'>
				<NavBar />
			</GridItem>
			{/* Show only when it large screen (laptop) 1024-1440px */}
			<Show above='lg'>
				<GridItem area='aside' bg='gold'>
					Aside
				</GridItem>
			</Show>
			<GridItem area='main'>
				<GameGrid />
			</GridItem>
			<GridItem></GridItem>
		</Grid>
	);
}

export default App;
