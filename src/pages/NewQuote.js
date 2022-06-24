import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import QuoteForm from '../components/quotes/QuoteForm';
import useHttp from '../hooks/useHttp';
import { addQuote } from '../lib/api';

const NewQuote = () => {
	const { sendRequest, status } = useHttp(addQuote);
	const history = useHistory();

	useEffect(() => {
		if (status === 'completed') {
			history.push('/quotes');
		}
	}, [history, status]);

	const addQuoteHandler = (quoteData) => {
		sendRequest(quoteData);

		history.push('/quotes');
	};

	return (
		<QuoteForm
			isLoading={status === 'pending'}
			onAddQuote={addQuoteHandler}
		/>
	);
};

export default NewQuote;
