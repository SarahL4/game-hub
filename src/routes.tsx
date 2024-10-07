import { createBrowserRouter } from 'react-router-dom';
import Layout from './pages/Layout';
import App from './App';
import GameGrid from './components/GameGrid';
import GameDetailPage from './pages/GameDetailPage';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: 'games/:slug',
				element: <GameDetailPage />,
			},
		],
	},
]);

export default router;
