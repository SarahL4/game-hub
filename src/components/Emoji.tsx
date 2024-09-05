import thumbup from '../assets/thumbup.jpg';
import meh from '../assets/meh.jpg';
import love from '../assets/love.avif';
import { ImageProps, Image } from '@chakra-ui/react';

interface Props {
	rating: number;
}

const Emoji = ({ rating }: Props) => {
	if (rating < 3) return null;

	const emojiMap: { [key: number]: ImageProps } = {
		3: { src: meh, alt: 'meh', boxSize: '30px' },
		4: { src: thumbup, alt: 'recommended', boxSize: '27px' },
		5: { src: love, alt: 'exceptional', boxSize: '25px' },
	};

	return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
