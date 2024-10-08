import { Heading, Spinner, SimpleGrid, Box } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import ExpandableText from '../components/ExpandableText';
import GameAttributes from '../components/GameAttributes';
import GameTrailer from '../components/GameTrailer';
import useGame from '../hooks/useGame';
import GameScreenshots from '../components/GameScreenshots';

const GameDetailPage = () => {
	const { slug } = useParams();
	// console.log(slug);
	const { data: game, isLoading, error } = useGame(slug!); //(slug ||'') slug!=will never be null
	// console.log(game?.id);
	if (isLoading) return <Spinner />;
	if (error || !game) throw error;
	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
			{/* GridItem */}
			<Box>
				<Heading>{game.name}</Heading>
				<ExpandableText>{game.description_raw}</ExpandableText>
				<GameAttributes game={game} />
			</Box>
			<Box>
				{/* dl-definition list element */}
				<GameTrailer gameId={game.id} />
				<GameScreenshots gameId={game.id} />
			</Box>
		</SimpleGrid>
	);
};

export default GameDetailPage;
