import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const HomeScreen = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Home Screen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'black',
    fontWeight: '700',
    fontSize: 16,
  },
})