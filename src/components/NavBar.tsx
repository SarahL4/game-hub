import { HStack, Image, Text } from '@chakra-ui/react';
import logo from '../assets/log.png';

const NavBar = () => {
	return (
		//Horizontal 水平线叠堆
		<HStack>
			<Image src={logo} boxSize='60px' mb='5px' />
			<Text>NavBar</Text>
		</HStack>
	);
};

export default NavBar;
