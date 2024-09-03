import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '../services/game-service';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Card border='1px solid red'>
			{/* <CardHeader>
					<Heading></Heading>
				</CardHeader> */}
			<Image src={getCroppedImageUrl(game.background_image)} />
			<CardBody border='2px solid pink'>
				<Heading fontSize='2xl' border='2px solid pink'>
					{game.name}
				</Heading>
				<HStack justifyContent={'space-between'} border='2px solid pink'>
					<PlatformIconList
						platforms={game.parent_platforms.map((p) => p.platform)}
					/>
					{/* {game.parent_platforms.map(({ platform }) => (
						<Text>{platform.name}</Text> */}
					<CriticScore score={game.metacritic} />
				</HStack>
			</CardBody>
			{/* <CardFooter></CardFooter> */}
		</Card>
	);
};

export default GameCard;
