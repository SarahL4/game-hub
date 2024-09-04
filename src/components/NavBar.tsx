import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/log.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

interface Props {
	onSearchInput: (searchInput: string) => void;
}

const NavBar = ({ onSearchInput }: Props) => {
	return (
		//Horizontal 水平线叠堆
		<HStack justifyContent='space-between' padding='10px'>
			<Image src={logo} boxSize='60px' mb='5px' />
			<SearchInput
				onSearch={(searchInput: string) => onSearchInput(searchInput)}
			/>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
