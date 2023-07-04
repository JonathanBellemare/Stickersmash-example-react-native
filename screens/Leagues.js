import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Leagues = () => {

  return (
    <View style={styles.container}>
        <Text style={styles.text}>Leagues page</Text>
    </View>
  )
}

export default Leagues

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