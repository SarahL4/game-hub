import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Image,
} from '@chakra-ui/react';
import { Game } from '../services/game-service';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<>
			<Card borderRadius={10}>
				{/* <CardHeader>
					<Heading></Heading>
				</CardHeader> */}
				<Image src={game.background_image} />
				<CardBody>
					<Heading fontSize='2xl'>{game.name}</Heading>
				</CardBody>
				{/* <CardFooter></CardFooter> */}
			</Card>
		</>
	);
};

export default GameCard;
