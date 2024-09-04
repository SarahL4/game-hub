import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by:{' '}
			</MenuButton>
			<MenuList>
				<MenuItem key={1}>Relevance</MenuItem>
				<MenuItem key={2}>Date added</MenuItem>
				<MenuItem key={3}>Name</MenuItem>
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
