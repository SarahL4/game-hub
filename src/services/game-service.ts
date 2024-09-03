import create from './http-service';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[];
	metacritic: number;
}

export interface FecthResponse<T> {
	count: number;
	results: T[];
}

export default create('');
