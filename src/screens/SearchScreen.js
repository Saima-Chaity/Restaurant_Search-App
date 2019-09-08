import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelpApi from '../api/yelp';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState([]);
	const [errorMessage, setErrorMessage] = useState('');

	const getRestaurants = async () => {
		try{
			const response = await yelpApi.get('/search', {
				params:{
					limit : 50,
					term: searchTerm,
					location: 'vancouver',
				}
			});
			console.log(response.data.businesses);
			setSearchResults(response.data.businesses);
		} catch(err){
			setErrorMessage('Something went wrong.');
		}
	};
	
	return(
		<View>
			<SearchBar 
				searchTerm = {searchTerm}
				onSearchTermChange = {setSearchTerm}
				onSearchTermSubmit = {getRestaurants}/>
			
			{errorMessage ? <Text>{errorMessage}</Text>: null}
			<Text>Search result {searchResults.length}</Text>
		</View>
	)
}

const styles = StyleSheet.create({});

export default SearchScreen;
