// import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import '../index.css';

interface Props {
	onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
	const ref = useRef<HTMLInputElement>(null);

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) onSearch(ref.current.value);
				// if (ref.current) console.log(ref.current.value);
			}}
		>
			<InputGroup>
				<InputLeftElement children={<BsSearch />} />
				{/* <SearchIcon /> */}
				<Input
					ref={ref}
					placeholder='Search games...'
					borderRadius={20}
					// onChange={(e) => onSearch(e.target.value)}
				/>
			</InputGroup>
		</form>
	);
};

export default SearchInput;
