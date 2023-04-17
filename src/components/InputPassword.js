import React, { useState} from 'react';
import { StyleSheet, Pressable, TextInput, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export default function InputPassword({handlePassword, value}) {
    const [passwordVisibility, setPasswordVisibility] = useState(true);
    const [rightIcon, setRightIcon] = useState('eye-off');    
    
  
    const handlePasswordVisibility = () => {
      if (rightIcon === 'eye') {
        setRightIcon('eye-off');
        setPasswordVisibility(!passwordVisibility);
      } else if (rightIcon === 'eye-off') {
        setRightIcon('eye');
        setPasswordVisibility(!passwordVisibility);
      }
    };

  const [password, setPassword] = useState(value);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Fontisto name="locked" size={20}  style={{margin:9}}  /> 
        <TextInput
          style={styles.inputField}
          name="password"
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="newPassword"
          secureTextEntry={passwordVisibility}
          value={password}
          enablesReturnKeyAutomatically
          onChangeText={text => {setPassword(text); handlePassword(text)}}
          underlineColorAndroid='rgba(0,0,0,0)' 
        />
        <Pressable onPress={handlePasswordVisibility} > 
        <Icon name={rightIcon} size={20} style={{right:9}}  /> 
        </Pressable>
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
    width:'75%'
  }
});