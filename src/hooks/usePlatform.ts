// import { Platform } from '../services/game-service';
// import useData from './useData';
import Platform from '../entities/Platform';
import usePlatforms from './usePlatforms';

const usePlatform = (id?: number) => {
	// const usePlatform = (id:number) => ({ data: platforms, isLoading: false, error: false });
	// const usePlatform = () => useData<Platform>('/platforms/lists/parents');
	const { data: platforms } = usePlatforms();

	return platforms?.results.find((p: Platform) => p.id === id);
};

export default usePlatform;
