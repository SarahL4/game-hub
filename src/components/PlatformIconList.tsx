import { HStack, Icon } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { BsGlobe } from 'react-icons/bs';
import {
	FaAndroid,
	FaApple,
	FaLinux,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from 'react-icons/fa'; //https://react-icons.github.io/react-icons/search/#q=faplaystation
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { Platform } from './../services/InterfaceServices';

interface Props {
	platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
	//object
	const iconMap: { [key: string]: IconType } = {
		//name. Playstation
		//Slug:playstation
		pc: FaWindows,
		playstation: FaPlaystation,
		xbox: FaXbox,
		nintendo: SiNintendo,
		mac: FaApple,
		linux: FaLinux,
		ios: MdPhoneIphone,
		android: FaAndroid,
		web: BsGlobe,
	};
	return (
		<HStack marginY={1} border='2px solid lightGreen'>
			{/* //marginY 卡片长并 */}
			{platforms.map((platform) => (
				<Icon as={iconMap[platform.slug]} key={platform.id} color='gray.500' />
				// <Text key={platform.id}>{platform.slug}</Text>
			))}
		</HStack>
	);
};
export default PlatformIconList;
