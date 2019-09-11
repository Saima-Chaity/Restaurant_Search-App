import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultDetails from './ResultDetails';
import {withNavigation} from 'react-navigation';

const ResultsList = (props) => {
  if(!props.results.length){
    return null;
  }
 	return(
		<View>
			<Text style = {styles.titleStyle}>{props.headerText}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data= {props.results}
				keyExtractor = {(result) => result.id}
				renderItem={({item}) => {
					return (
						<TouchableOpacity onPress={() => props.navigation.navigate('ResultsShow', {id: item.id})}>
							<ResultDetails result={item}/>
						</TouchableOpacity>
					)
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

export default withNavigation(ResultsList);
