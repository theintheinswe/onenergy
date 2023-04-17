import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const Space = () => {
  return (
    <View style={styles.lineBreak}><Text>{" "}</Text></View>
  )
}

export default Space;

const styles = StyleSheet.create({
    lineBreak: {    
        lineBreak: 'loose'
    }
  });