import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';
import { Game } from '../services/InterfaceServices';
import CriticScore from './CriticScore';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';
import { Link } from 'react-router-dom';

interface Props {
	game: Game;
}

const GameCard = ({ game }: Props) => {
	return (
		<Link to={`/games/${game.id}`}>
			<Card border='1px solid red'>
				{/* <CardHeader>
					<Heading></Heading>
				</CardHeader> */}
				<Image src={getCroppedImageUrl(game.background_image)} />
				<CardBody border='2px solid pink'>
					<HStack
						justifyContent={'space-between'}
						border='1px solid pink'
						marginBottom={3}
					>
						<PlatformIconList
							platforms={game.parent_platforms.map((p) => p.platform)}
						/>
						<CriticScore score={game.metacritic} />
					</HStack>
					<Heading fontSize='2xl' border='1px solid pink' textAlign='left'>
						{game.name}
						<Emoji rating={game.rating_top} />
					</Heading>
				</CardBody>
				{/* <CardFooter></CardFooter> */}
			</Card>
		</Link>
	);
};

export default GameCard;
