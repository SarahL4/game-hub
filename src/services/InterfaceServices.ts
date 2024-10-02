export interface Genre {
	id: number;
	name: string;
	image_background: string;
}

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
	rating_top: number; // a whole number 12345->emoji
}

export interface FecthResponse<T> {
	count: number;
	results: T[];
}
