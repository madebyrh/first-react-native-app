import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
//ScrollViewはすべて一度にrenderする
//FlatListは動的にRenderする　=> メモリを配慮した設計
import ListItem from '../ListItem/ListItem';

const placeList = props => {
    /*
    const placesOutput = props.places.map((place, i) => (
        <ListItem key={i} placeName={place} onItemPressed={() => props.onItemDeleted(i)}/>
    ));
    return (
        <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
    );
    */
   

    return (
        <FlatList
          style={styles.listContainer}
          data={props.places}
          renderItem={(info) => (
            <ListItem
              placeName={info.item.name}
              placeImage={info.item.image}
              //onItemPressed={() => props.onItemDeleted(info.item.key)}
              onItemPressed={() => props.onItemSelected(info.item.key)}
            />
          )}
        />
      );

};

const styles = StyleSheet.create({
    listContainer: {
        width: "100%"
      }    
})

export default placeList;