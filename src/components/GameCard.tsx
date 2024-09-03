import {
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react';
import { Game } from '../services/game-service';
import PlatformIconList from './PlatformIconList';

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
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					{/* {game.parent_platforms.map(({ platform }) => (
						<Text>{platform.name}</Text> */}
				</CardBody>
				{/* <CardFooter></CardFooter> */}
			</Card>
		</>
	);
};

export default GameCard;
