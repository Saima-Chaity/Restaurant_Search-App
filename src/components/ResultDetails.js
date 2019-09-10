import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ResultDetails = (props) => {
 	return(
		<View style = {styles.viewStyle}>
      <Image 
        style = {styles.imageStyle}
        source={{uri: props.result.image_url}} />
			<Text style = {styles.titleStyle}>{props.result.name}</Text>
      <Text>{props.result.rating} Stars, {props.result.review_count} Reviews</Text>
		</View>
	)
}

const styles = StyleSheet.create({
  viewStyle:{
    marginLeft: 10,
    marginTop: 10,
  },
	titleStyle:{
		fontSize: 15,
    fontWeight: "700",
    marginTop:3,
    marginBottom:5,
  },
  imageStyle:{
    width:250,
    height:120,
    borderRadius:4,
    marginLeft: 2,
    marginVertical: 4,
  }
});

export default ResultDetails;
