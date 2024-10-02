import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: '47942090cfc4468cbd3cca404ed7045f',
	},
});

// export { CanceledError };
