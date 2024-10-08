import { Box, Heading } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	term: string;
	children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
	return (
		<>
			<Box marginY={5}>
				{/* dt:definition term */}
				<Heading as='dt' fontSize='md' color='gray.600'>
					{term}
				</Heading>
				{/* dd:definition list element */}
				<dd>{children}</dd>
			</Box>
		</>
	);
};
export default DefinitionItem;
