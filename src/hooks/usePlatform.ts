// import { Platform } from '../services/game-service';
// import useData from './useData';
import platforms from '../data/platforms';

const usePlatform = () => ({ data: platforms, isLoading: false, error: false });
// const usePlatform = () => useData<Platform>('/platforms/lists/parents');

export default usePlatform;
