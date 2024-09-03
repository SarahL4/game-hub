import { Genre } from '../services/genre-service';
import useData from './useData';

const useGenre = () => useData<Genre>('/genres');
// const [genres, setGenres] = useState<Genre[]>([]);
// const [error, setError] = useState(false);
// const [isLoading, setLoading] = useState(false);

// useEffect(() => {
// 	setLoading(true);
// 	const { request, cancel } = genreService.getAll<FetchGenreResponse>();
// 	request
// 		.then((response) => {
// 			setGenres(response.data.results);
// 			setLoading(false);
// 		})
// 		.catch((err) => {
// 			if (err instanceof CanceledError) return;
// 			setError(err.message);
// 			setLoading(false);
// 		});

// 	return () => cancel();
// }, []);

// return { genres, error, isLoading };

export default useGenre;
