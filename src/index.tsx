import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage';

const App = () => {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route element={<HomePage />} path='/' />
				</Routes>
			</BrowserRouter>
		</>
	);
};

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
