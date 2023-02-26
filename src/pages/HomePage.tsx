import { FC, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Logo, Typography } from 'components/data-display';
import { Header, Page } from 'components/surfaces';

const HomePage: FC = () => {
	const navigate = useNavigate();

	const logoCallback = useCallback(() => {
		navigate('/');
	}, [navigate]);

	return (
		<Page title='Home'>
			<Header>
				<Logo onClick={logoCallback} />

				<Typography variant='header'>Reminders Clone</Typography>
			</Header>
		</Page>
	);
};

export default HomePage;
