import { HStack, Image } from '@chakra-ui/react';
import logo from '../assets/log.png';
import ColorModeSwitch from './ColorModeSwitch';

const NavBar = () => {
	return (
		//Horizontal 水平线叠堆
		<HStack justifyContent='space-between' padding='10px'>
			<Image src={logo} boxSize='60px' mb='5px' />
			<ColorModeSwitch />
		</HStack>
	);
};

export default NavBar;
