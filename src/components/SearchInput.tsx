// import { SearchIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import '../index.css';
import useGameQueryStore from '../store';
import { useNavigate } from 'react-router-dom';

//compensate by store
// interface Props {
// 	onSearch: (searchText: string) => void;
// }

// const SearchInput = ({ onSearch }: Props) => {
const SearchInput = () => {
	const ref = useRef<HTMLInputElement>(null);
	const setSearchText = useGameQueryStore((s) => s.setSearchText);
	const navigate = useNavigate();

	return (
		<form
			onSubmit={(event) => {
				event.preventDefault();
				if (ref.current) {
					setSearchText(ref.current.value);
					navigate('/');
				}
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
