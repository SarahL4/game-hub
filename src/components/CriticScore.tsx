import { Badge } from '@chakra-ui/react';

interface Props {
	score: number;
}

const CriticScore = ({ score }: Props) => {
	let color = score > 85 ? 'green' : score > 80 ? 'orange' : '';
	return (
		<Badge fontSize='14px' paddingX={2} borderRadius={2} color={color}>
			{score}
		</Badge>
	);
};

export default CriticScore;
