import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
	return (
		<Box
			// width='100%'
			borderRadius={10}
			overflow='hidden'
			border='1px solid red'
			_hover={{
				transform: 'scale(1.03)',
				transition: 'transform .15s ease-in', //1.15s, very slow to zoon in, forward
			}}
		>
			{children}
		</Box>
	);
};

export default GameCardContainer;
