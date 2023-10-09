import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, ScrollView, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'




const HomeScreen = ({navigation}) => {

    let [quote, setQuote] = useState('')
    let [source, setSource] = useState('')

      const axiosApiCall = () => {
        axios({
          "method": "GET",
          "url": "https://quotes15.p.rapidapi.com/quotes/random/",
          "headers": {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "quotes15.p.rapidapi.com",
            "x-rapidapi-key": "786187866amsh8c7ae72000419dap1c872bjsncaa46fd9d0dc",
            "useQueryString": true
          }, "params": {
            "language_code": "en"
          }
        })
          .then((response) => {
            setQuote(response.data.content);
            setSource(response.data.originator.name)
          })
          .catch((error) => {
            console.log(error)
          })
      }
      
    
      const [responseData, setResponseData] = useState(null);

      useEffect(() => {

        const fetchImages = async () => {
          const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/auto-complete',
            params: { q: 'billie' },
            headers: {
              'X-RapidAPI-Key': '39c8664efcmshcbbdcbeaf8be915p1cac7djsne4ac8386c200',
              'X-RapidAPI-Host': 'imdb8.p.rapidapi.com',
            },
          };
    
          try {
            const response = await axios.request(options);
            setResponseData(response.data);
          } catch (error) {
            console.error(error);
          }
        };
    
        fetchImages(); // Call the async function when the component mounts
      }, []);




  return (
    <SafeAreaView style={styles.root}>
<ScrollView showsVerticalScrollIndicator ={false}>
      <View>
        <Text style={{fontSize: 30, fontWeight: "bold",marginLeft: "25%", color: 'purple'}}>API WORLD</Text>
      </View>

      <View>

          <View style={{margin: '5%'}}>
          <Text style={styles.source}>Quotes</Text>
            <Text style={styles.quote}>{quote}</Text>
            <Text style={styles.source}>{source}</Text>
            <TouchableOpacity onPress={axiosApiCall}>
            <View style={styles.viewquote}>
              <Text style={styles.buttonText}>Get Quotes</Text>
            </View>
          </TouchableOpacity>
          </View>

      </View>

              <View style={{margin: '5%'}}>
              <Text style={styles.source}>Images</Text>
              {responseData ? (
                <View>
                  {responseData.d.map((item, index) => (
                    <Image
                      key={index}
                      source={{ uri: item.i ? item.i.imageUrl : null }}
                      style={{ width: '70%', marginLeft:'15%', margin:2, height: 300, }}
                    />
                  ))}
                </View>
              ) : (
                <Text></Text>
              )}
              </View>
       
            <View style={{flexDirection: 'row', marginLeft: '9%'}}>

              <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Home')}>
                <Text style={styles.login}>Home</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Notice')}>
                <Text style={styles.login}>Notices</Text>
              </TouchableOpacity>

              <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Explore')}>
                <Text style={styles.login}>Explore</Text>
              </TouchableOpacity>
              

              <TouchableOpacity 
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
                <Text style={styles.login}>Logout</Text>
              </TouchableOpacity>

            </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: 'pink',
  },
  text:{
    fontSize: 30,
    fontWeight:"700",
    paddingLeft: '7%',
    
  },
  button:{
    backgroundColor: '#1F1E1E',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 10,
    width: '20%',
    height: 50,
    margin: 5,
  },
  viewquote:{
    backgroundColor: '#1F1E1E',
    alignItems: 'center', 
    justifyContent: 'center',
    borderRadius: 10,
    width: '70%',
    height: 50,
    marginTop: 10,
  },
  login:{
    color: 'white', 
    fontWeight: 'bold',
  },
  buttonText:{
    color: 'white', 
    fontWeight: 'bold',
  },
  quote:{
    fontSize: 20
  },
  source:{
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 25
  }

})