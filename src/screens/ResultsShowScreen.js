import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import yelpApi from '../api/yelp';

const ResultsShowScreen = (props) => {
  const [detail, setDetail] = useState(null);
  const id = props.navigation.getParam('id');
  const getRestaurantDetails = async (id) =>{
    const response = await yelpApi.get(`/${id}`);
    setDetail(response.data);
  }

  useEffect(() => {
    getRestaurantDetails(id);
  }, []);

  if(!detail){
    return null;
  }

	return(
		<View>
			<Text>{detail.name}</Text>
      <FlatList 
        data = {detail.photos}
        keyExtractor = {(photo) => photo}
        renderItem = {({item}) => {
          return <Image style={styles.imageStyle} source = {{uri : item}} />
        }}
      />
		</View>
	)
}

const styles = StyleSheet.create({
  imageStyle:{
    height: 200,
    width: 300,
    marginVertical: 10,
  }
});

export default ResultsShowScreen;
