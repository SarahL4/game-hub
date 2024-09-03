import {
	HStack,
	List,
	ListItem,
	Image,
	Spinner,
	Button,
} from '@chakra-ui/react';
import useGenre from '../hooks/useGenre';
import getCroppedImageUrl from './../services/image-url';
import { Genre } from '../services/genre-service';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
	// const { data } = useData<Genre>('/genres');
	const { data, isLoading, error } = useGenre();

	if (error) return null;

	if (isLoading) return <Spinner />;

	return (
		<List>
			{data.map((genre) => (
				<ListItem key={genre.id} paddingY='5px'>
					<HStack>
						<Image
							boxSize='32px'
							borderRadius={8}
							src={getCroppedImageUrl(genre.image_background)}
						/>
						<Button
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
			;
		</List>
	);
};

export default GenreList;
