import { useQuery } from '@tanstack/react-query';
import genres from '../assets/data/genres';
import apiClient from '../services/api-client';
import { FecthResponse, Genre } from '../services/InterfaceServices';

const useGenres = () =>
	useQuery({
		queryKey: ['genres'],
		queryFn: () =>
			apiClient.get<FecthResponse<Genre>>('/genres').then((res) => res.data),
		staleTime: 24 * 60 * 60 * 1000, //24h
		initialData: { count: genres.length, results: genres },
	});

export default useGenres;
