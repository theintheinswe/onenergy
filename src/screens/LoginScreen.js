import React,{useState} from 'react';
import  { Stack, Button, Text} from "@react-native-material/core";
import {useDispatch, useSelector} from 'react-redux'
import {signinUser} from '../reducers/authReducer';
import InputPassword from "../components/InputPassword";
import InputText from "../components/InputText";
import LogoText from "../components/LogoText";
import Space from "../components/Space";

const LoginScreen = () => {
  const user = useSelector(state => state.user);
     
    const [email,setEmail] = useState("user@gmail.com")
    const [password,setPassword] = useState("user123")
    const dispatch  = useDispatch()
    const Authenticate = ()=>{       
      dispatch(signinUser({email,password}));     
    }

    const handleEmail = React.useCallback( async (email) => {
      setEmail(email)
    }, []);

    const handlePassword = React.useCallback( async (password) => {
      setPassword(password)
    }, []);

    return (
      <Stack fill center  spacing={2} style={{ margin: 16}}>
        <LogoText />    
        <Space />
        <InputText value={email} name="email" handleEmail={handleEmail} />
        <Space />
        <InputPassword value={password} handlePassword={handlePassword} /> 
        <Space />   
        <Button title="Login" 
          titleStyle={{fontSize:18,fontWeight:800}} 
          uppercase={false} contentContainerStyle={{width:'100%', height:50, borderRadious:50, backgroundColor:"#E74C3C", borderColor:"#E74C3C"}}
          onPress={()=>Authenticate()}
          />
         {user.error &&
            <Text style={{color:"red"}}>{user.error}</Text>
         }
     </Stack>
    )
}

export default LoginScreen;
