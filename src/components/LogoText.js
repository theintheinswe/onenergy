import React from 'react';
import { StyleSheet , View, Text} from 'react-native';

const LogoText = () => {
  return (
    <View>
     <Text style={styles.logo}>onenergy</Text>
    </View>
  )
}

export default LogoText;

const styles = StyleSheet.create({
    logo: {    
      textTransform : 'uppercase',
      letterSpacing : -1,
      fontSize:30,
      fontWeight:600,
      textAlign:"center",
      color:"#E74C3C"
    }
});