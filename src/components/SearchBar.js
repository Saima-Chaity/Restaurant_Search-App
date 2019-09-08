import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = () => {
	return(
		<View style={styles.viewStyle}>
			<FontAwesome name="search" style={styles.iconStyle}/>
			<TextInput placeholder="Search" style={styles.inputStyle}/>
		</View>
	)
}

const styles = StyleSheet.create({
	viewStyle:{
		backgroundColor:'#F0EEEE',
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection:'row'
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
