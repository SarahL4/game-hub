import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement, Text } from '@chakra-ui/react';

interface Props {
	onSearch: (searchContent: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	return (
		<InputGroup>
			<InputLeftElement>
				<SearchIcon />
			</InputLeftElement>
			<Input
				placeholder='Search games...'
				borderRadius={20}
				onChange={(e) => onSearch(e.target.value)}
			/>
		</InputGroup>
	);
};

export default SearchInput;
