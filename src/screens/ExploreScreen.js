import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, Button, View } from 'react-native';
import axios from 'axios';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';





const ExploreScreen = () => {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const fetchData = () => {
    const options = {
      method: 'GET',
      url: 'https://real-time-web-search.p.rapidapi.com/search',
      params: {
        q: query,
        limit: '100',
      },
      headers: {
        'X-RapidAPI-Key':
          '39c8664efcmshcbbdcbeaf8be915p1cac7djsne4ac8386c200',
        'X-RapidAPI-Host': 'real-time-web-search.p.rapidapi.com',
      },
    };
    axios
      .request(options)
      .then((response) => {
        // setResult(JSON.stringify(response.data, null, 2));
        const formattedText = `Response Status: ${response.status}\nResponse Data:\n`;
      setResult(formattedText, response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.root}>
    <ScrollView showsVerticalScrollIndicator ={false}>
    <View style={styles.view}>
      <Text>Enter your search query:</Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, borderRadius: 5, padding: 5 }}
        onChangeText={(text) => setQuery(text)}
        value={query}
      />
      <Button title="Search" onPress={fetchData} />
      <Text>Result:</Text>
      <Text>{result}</Text>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

export default ExploreScreen;

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: 'pink',
  },
  view:{
    margin: '10%',
    padding: 10
  }
})