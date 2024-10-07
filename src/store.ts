import { create } from 'zustand';
import { GameQuery } from './services/InterfaceServices';

interface GameQueryStore {
	gameQuery: GameQuery;
	setSearchText: (searchText: string) => void;
	setGenreId: (genreId: number) => void;
	setPlatform: (platformId: number) => void;
	setSortOrder: (sortOrder: string) => void;
}

const UseGameQueryStore = create<GameQueryStore>((set) => ({
	gameQuery: {},
	setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
	setGenreId: (genreId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, genreId } })),
	setPlatform: (platformId) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, platformId } })),
	setSortOrder: (sortOrder) =>
		set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default UseGameQueryStore;
