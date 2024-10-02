import {
	HStack,
	List,
	ListItem,
	Image,
	Spinner,
	Button,
	Heading,
} from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import getCroppedImageUrl from './../services/image-url';
import { Genre } from '../services/genre-service';
import useGenres from '../hooks/useGeneres';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	// const { data } = useData<Genre>('/genres');
	const { data, isLoading, error } = useGenres();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<>
			{' '}
			<Heading fontSize='2xl' marginBottom={3} textAlign='left'>
				Genre
			</Heading>
			<List>
				{data?.results.map((genre) => (
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
								onClick={() => onSelectGenre(genre)}
								fontSize='lg'
								fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'}
								colorScheme={genre.id === selectedGenre?.id ? 'green' : ''}
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
