import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGameQueryStore from '../store';

// interface Props {
// 	onSelectSortOrder: (SortOrder: string) => void;
// 	sortOrder: string;
// }

// const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
const SortSelector = () => {
	const sortOrders = [
		{ value: '', label: 'Revlevance' },
		{ value: '-add', label: 'Date added' },
		{ value: 'name', label: 'Name' },
		{ value: '-released', label: 'Release date' },
		{ value: '-metacritic', label: 'Popularity' },
		{ value: '-ratting', label: 'Average rating' },
	];

	const setSortOrder = useGameQueryStore((s) => s.setSortOrder);
	const sortOrder = useGameQueryStore((s) => s.gameQuery.sortOrder);

	const currentSortOrder = sortOrders.find(
		(order) => order.value === sortOrder
	);

	return (
		<Menu>
			<MenuButton as={Button} rightIcon={<BsChevronDown />}>
				Order by: {currentSortOrder?.label || 'Relevance'}
			</MenuButton>
			<MenuList>
				{sortOrders.map((order) => (
					<MenuItem
						onClick={() => setSortOrder(order.value)}
						key={order.value}
						value={order.value}
					>
						{order.label}
					</MenuItem>
				))}
			</MenuList>
		</Menu>
	);
};

export default SortSelector;
