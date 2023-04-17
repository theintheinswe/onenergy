import React,{useEffect} from 'react';
import {configureStore} from '@reduxjs/toolkit';
import authReducer, { addToken} from './reducers/authReducer';
import {Provider,useSelector,useDispatch} from 'react-redux';
import LoginScreen from './screens/LoginScreen';
import TabNavigator from './navigation/TabNavigator';

const store = configureStore({
  reducer:{
    user:authReducer
  }
})
function Index() {
  const token = useSelector(state => state.user.token)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch( addToken() )
  },[])
  return (
    <>
    {token ? <TabNavigator /> :<LoginScreen />  }
   
    </>
  );
}

export default ()=>{
  return (
    <Provider store={store}>       
        <TabNavigator />
     </Provider>
  )
}


