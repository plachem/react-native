import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

import placeImage from './src/assets/kar.jpg'
import ListItem from './src/components/ListItem';

export default class App extends React.Component {
  state = {
    placeName: "",
    places: []
  }

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => (
      <ListItem 
        key={i} 
        placeName={place} 
        onItemPressed={() => alert(i)}
      />
    ));

    const img = {
        uri: "http://bipbap.ru/wp-content/uploads/2017/10/E_HGJqu0T2M.jpg"
    };
    
    return (
      <View style={styles.container}>
         <Image
           source={placeImage}
           style={{flex:1, height: 500, width: 500}}
           resizeMode="contain" 
         />
         <Image
           source={img}
           style={{flex:1, height: 1000, width: 1000}}
           resizeMode="contain" 
         />

         <View style={styles.inputContainer}>
          <TextInput
            style={styles.placeInput}
            placeholder="Input Text"
            value={this.state.placeName}
            onChangeText={this.placeNameChangeHandler}
          />
          <Button
            title="Add"
            style={styles.placeButton} 
            onPress={this.placeSubmitHandler} 
          />

        </View>
        <ScrollView style={styles.listContainer}>
            {placesOutput}
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});