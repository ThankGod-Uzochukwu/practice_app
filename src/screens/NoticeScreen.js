import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native'

const NoticeScreen = () => {
  return (
    <SafeAreaView style={styles.root}>
    <ScrollView showsVerticalScrollIndicator = {false}>
      <View>
      <Text style={styles.text}>Notifications</Text>
    </View>
    <View>
      <Text style={styles.smalltext}>No new notification.</Text>
    </View>
    </ScrollView>
    
    </SafeAreaView>
  )
}

export default NoticeScreen

const styles = StyleSheet.create({
  root:{
    flex:1,
    backgroundColor: 'pink',
    // justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontWeight: 'bold',
    marginTop: 15,
    fontSize: 25
  },
  smalltext:{
    marginTop: 10,
    marginLeft: 5
  }
})