import { useQuery } from '@tanstack/react-query';
import apiClient from '../services/api-client';
import { Genre } from '../services/genre-service';
import genres from '../assets/data/genres';
import { FecthResponse } from '../services/game-service';

// const useGenres = () => ({ data: genres, isLoading: false, error: null });
const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () =>
			apiClient.get<FecthResponse<Genre>>('/genres').then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: { count: genres.length, results: genres },
		// initialData:genres
	});

export default useGenres;
