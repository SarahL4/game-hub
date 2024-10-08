import useTrailers from '../hooks/useTrailers';

interface Props {
	gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
	const { data, isLoading, error } = useTrailers(gameId);
	console.log(data);

	if (isLoading) return null;
	if (error) throw error;

	const first = data?.results[0];
	return first ? (
		<video src={first.data[480]} poster={first.preview} controls />
	) : null;
	// if (!first) return null;

	// return (
	// 	<video src={first.data[480]} poster={first.preview} controls></video>
	// 	// <AspectRatio>
	// 	// 	<iframe src={data?.results[0]?.data[480]} />
	// 	// </AspectRatio>
	// );
};

export default GameTrailer;
