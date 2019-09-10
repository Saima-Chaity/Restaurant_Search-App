import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = (props) => {
	return(
		<View style={styles.viewStyle}>
			<FontAwesome name="search" style={styles.iconStyle}/>
			<TextInput 
				autoCapitalize = "none"
				autoCorrect = {false}
				style={styles.inputStyle}
				placeholder="Search" 
				value={props.searchTerm}
				onChangeText = {props.onSearchTermChange}
				onEndEditing = {props.onSearchTermSubmit}/>
		</View>
	)
}

const styles = StyleSheet.create({
	viewStyle:{
		backgroundColor:'#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection:'row',
		marginVertical: 15,
	},
	iconStyle:{
		fontSize: 35,
		alignSelf: "center",
		marginHorizontal: 15,
	},
	inputStyle:{
		flex: 1,
		fontSize: 20,
	}
});

export default SearchBar;
