import React, { useState} from 'react';
import { StyleSheet, Pressable, TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function InputPassword({name, handleEmail, value}) {   

  const [email, setEmail] = useState(value);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Fontisto name="email" size={20}  style={{margin:9}}  /> 
        <TextInput
          style={styles.inputField}
          name={name}
          placeholder={`Enter ${name}`}
          autoCapitalize="none"
          autoCorrect={false}
          value={email}
          onChangeText={text => {setEmail(text); handleEmail(text)}}
          enablesReturnKeyAutomatically
          underlineColorAndroid='rgba(0,0,0,0)' 
        />        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {    
    backgroundColor: '#F5EEDC',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    backgroundColor: 'white',
    width: '100%',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#616161'
  },
  inputField: {
    fontSize: 16,
    width:'80%'
  }
});