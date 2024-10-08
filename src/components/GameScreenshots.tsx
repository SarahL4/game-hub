import { Image, SimpleGrid } from '@chakra-ui/react';
import Screenshoot from '../entities/Screenshoot';
import useScreeenshots from '../hooks/useScreenshots';

interface Props {
	gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
	const { data, error, isLoading } = useScreeenshots(gameId);
	console.log(data?.results[0]);

	if (isLoading) return null;
	if (error) throw error;

	return (
		<SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
			{data?.results.map((file: Screenshoot) => (
				<Image key={file.id} src={file.image} />
			))}
		</SimpleGrid>
	);
};

export default GameScreenshots;
