import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/log.png';
import ColorModeSwitch from './ColorModeSwitch';
import SearchInput from './SearchInput';

// interface Props {
// 	onSearch: (searchText: string) => void;
// }

// const NavBar = ({ onSearch }: Props) => {
const NavBar = () => {
	return (
		//Horizontal 水平线叠堆 justifyContent='space-between'
		<HStack padding='10px'>
			<Image src={logo} boxSize='60px' mb='5px' />
			<SearchInput
			// onSearch={onSearch}
			/>
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
