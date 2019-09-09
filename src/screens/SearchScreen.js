import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearchResults from '../hooks/useSearchResults';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [getRestaurants, searchResults, errorMessage] = useSearchResults();
 	return(
		<View>
			<SearchBar 
				searchTerm = {searchTerm}
				onSearchTermChange = {setSearchTerm}
				onSearchTermSubmit = {() => getRestaurants(searchTerm)}/>
			
			{errorMessage ? <Text>{errorMessage}</Text>: null}
			<Text>Search result {searchResults.length}</Text>
		</View>
	)
}

const styles = StyleSheet.create({});

export default SearchScreen;
