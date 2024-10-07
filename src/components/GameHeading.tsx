import { Heading } from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import usePlatform from '../hooks/usePlatform';
import useGameQueryStore from '../store';

//compensate by useGameQueryStore
// interface Props {
// 	gameQuery: GameQuery;
// }

// const GameHeading = ({ gameQuery }: Props) => {
const GameHeading = () => {
	const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const genre = useGenre(genreId);
	const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
	const platform = usePlatform(platformId);
	// const { data: platforms } = usePlatforms();
	// const platform = platforms?.results.find(
	// 	(p) => p.id === gameQuery.platformId
	// );

	//Games - genre: Action Games; platform: Xbox games; platform->genre: xbox action games
	const heading = `${platform?.name || ''} ${genre?.name || ''} Games`;

	return (
		<Heading as='h1' marginY={5} fontSize='5xl'>
			{heading}
		</Heading>
	);
};
export default GameHeading;
