import {
	Button,
	Heading,
	HStack,
	Image,
	List,
	ListItem,
	Spinner,
} from '@chakra-ui/react';
import getCroppedImageUrl from './../services/image-url';
import useGenres from '../hooks/useGenres';
import useGameQueryStore from '../store';
import Genre from '../entities/Genre';

//compensate by useGameQueryStore
// interface Props {
// 	onSelectGenre: (genre: Genre) => void;
// 	selectedGenreId?: number;
// }

// const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
const GenreList = () => {
	// const { data } = useData<Genre>('/genres');
	const { data, isLoading, error } = useGenres();
	const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
	const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			{' '}
			<Heading fontSize='2xl' marginBottom={3} textAlign='left'>
				Genre
			</Heading>
			<List>
				{data?.results.map((genre: Genre) => (
					<ListItem key={genre.id} paddingY='5px'>
						<HStack>
							<Image
								objectFit='cover'
								boxSize='32px'
								borderRadius={8}
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								whiteSpace='normal'
								textAlign='left'
								onClick={() => setSelectedGenreId(genre.id)}
								fontSize='lg'
								fontWeight={genre.id === selectedGenreId ? 'bold' : 'normal'}
								colorScheme={genre.id === selectedGenreId ? 'green' : ''}
								variant='link'
							>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
