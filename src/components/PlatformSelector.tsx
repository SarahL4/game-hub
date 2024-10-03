import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';
import { Platform } from '../services/InterfaceServices';
import usePlatform from '../hooks/usePlatform';

interface Props {
	onSelectPlatform: (platform: Platform | null) => void;
	selectedPlatformId?: number;
}

const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
	const { data, error } = usePlatforms();
	const platform = usePlatform(selectedPlatformId);
	// const selectedPlatform = data?.results.find(
	// 	(p) => p.id === selectedPlatformId
	// );

	if (error) return null;

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				{platform?.name || 'Platforms'}
			</MenuButton>
			<MenuList>
				{data?.results.map((platform: Platform) => (
					<MenuItem
						onClick={() => onSelectPlatform(platform)}
						key={platform.id}
					>
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
