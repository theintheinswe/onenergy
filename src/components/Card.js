import React from 'react'
import { StyleSheet, View, Text } from 'react-native'

const Card = ({children}) => {
  return (
    <View style={styles.container}>
        {children}
    </View>
  )
}

export default Card;

const styles = StyleSheet.create({
    container: {  
      backgroundColor: '#FFFFFF',
      padding:5,      
      borderRadius: 50     
    }
  });