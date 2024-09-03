import { CanceledError } from 'axios';
import genreService, {
	FetchGenreResponse,
	Genre,
} from '../services/genre-service';
import { useEffect, useState } from 'react';

const useGenre = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const [error, setError] = useState(false);
	const [isLoading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		const { request, cancel } = genreService.getAll<FetchGenreResponse>();
		request
			.then((response) => {
				setGenres(response.data.results);
				setLoading(false);
			})
			.catch((err) => {
				if (err instanceof CanceledError) return;
				setError(err.message);
				setLoading(false);
			});

		return () => cancel();
	}, []);

	return { genres, error, isLoading };
};

export default useGenre;
