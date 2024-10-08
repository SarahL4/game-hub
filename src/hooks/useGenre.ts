// import { Genre } from '../services/genre-service';
// import useData from './useData';
import Genre from '../entities/Genre';
import useGenres from './useGenres';

const useGenre = (id?: number) => {
	const { data: genres } = useGenres();
	return genres?.results.find((g: Genre) => g.id === id);
};
// const useGenre = () => ({ data: genres, isLoading: false, error: null });
// const useGenre = () => useData<Genre>('/genres');
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
