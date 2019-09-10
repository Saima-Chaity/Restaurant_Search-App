import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ResultDetails from './ResultDetails';

const ResultsList = (props) => {
 	return(
		<View>
			<Text style = {styles.titleStyle}>{props.headerText}</Text>
			<FlatList
				horizontal
				data= {props.results}
				keyExtractor = {(result) => result.id}
				renderItem={({item}) => {
					return <ResultDetails result={item}/>;
				}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	titleStyle:{
		fontSize: 25,
		fontWeight: "700",
		marginTop:10,
		marginLeft:10,
	}
});

export default ResultsList;
