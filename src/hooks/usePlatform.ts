import { Platform } from '../services/game-service';
import useData from './useData';

const usePlatform = () => useData<Platform>('/platforms/lists/parents');

export default usePlatform;
