import {useState, useEffect} from 'react';
import yelpApi from '../api/yelp';

export default () => {
  const [searchResults, setSearchResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const getRestaurants = async (searchTerm) => {
		try{
			const response = await yelpApi.get('/search', {
				params:{
					limit : 50,
					term: searchTerm,
					location: 'vancouver',
				}
			});
			setSearchResults(response.data.businesses);
		} catch(err){
			setErrorMessage('Something went wrong.');
		}
	};

	useEffect(() => {
		getRestaurants('pasta');
	}, []);

	return [getRestaurants, searchResults, errorMessage];
}