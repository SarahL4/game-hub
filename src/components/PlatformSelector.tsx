import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { Platform } from '../services/game-service';
import usePlatform from '../hooks/usePlatform';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
	onSelectPlatform: (platform: Platform | null) => void;
}

const PlatformSelector = ({ onSelectPlatform }: Props) => {
	const { data, error } = usePlatform();

	if (error) return null;

	return (
		<Menu>
			<MenuButton
				onClick={
					(event) => console.log(event)
					// onSelectPlatform(JSON.parse(event.currentTarget.value))
				}
				as={Button}
				rightIcon={<BsChevronDown />}
			>
				Platform
			</MenuButton>
			<MenuList>
				{data.map((platform) => (
					<MenuItem value={JSON.stringify(platform)} key={platform.id}>
						{platform.name}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
		// <Select
		// 	variant='filled'
		// 	placeholder='Platform'
		// 	onChange={(e) => {
		// 		console.log(JSON.parse(e.target.value)),
		// 			onSelectPlatform(JSON.parse(e.target.value));
		// 	}}
		// >
		// 	{data.map((p) => (
		// 		<option value={JSON.stringify(p)} key={p.id}>
		// 			{p.name}
		// 		</option>
		// 	))}
		// </Select>
	);
};

export default PlatformSelector;
