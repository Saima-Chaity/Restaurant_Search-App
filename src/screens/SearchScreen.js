import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import useSearchResults from '../hooks/useSearchResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [getRestaurants, searchResults, errorMessage] = useSearchResults();

	const filterResultsByPrice = (price) => {
		return searchResults.filter(result => {
			return result.price === price;
		});
	};

 	return(
		<View>
			<SearchBar 
				searchTerm = {searchTerm}
				onSearchTermChange = {setSearchTerm}
				onSearchTermSubmit = {() => getRestaurants(searchTerm)}/>
			
			{errorMessage ? <Text>{errorMessage}</Text>: null}
			<ResultsList 
				headerText = "Cost Effective" 
				results={filterResultsByPrice('$')}/>
			<ResultsList 
				headerText = "Bit  Pricier" 
				results={filterResultsByPrice('$$')}/>
			<ResultsList 
				headerText = "Big Spender" 
				results={filterResultsByPrice('$$$')}/>
		</View>
	)
}

const styles = StyleSheet.create({});

export default SearchScreen;
