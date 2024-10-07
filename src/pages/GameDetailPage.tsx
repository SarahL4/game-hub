import { Heading, Spinner, Text } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import useGame from '../hooks/useGame';

const GameDetailPage = () => {
	const { slug } = useParams();
	console.log(slug);
	const { data: game, isLoading, error } = useGame(slug!); //(slug ||'') slug!=will never be null

	if (isLoading) return <Spinner />;
	if (error || !game) throw error;
	return (
		<>
			<Heading>{game.name}</Heading>
			<Text>{game.description_raw}</Text>
		</>
	);
};

export default GameDetailPage;
