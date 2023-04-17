import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from "../screens/HomeScreen"
import ChartScreen from "../screens/ChartScreen"
import CalendarScreen from '../screens/CalendarScreen'

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (   
      <Stack.Navigator 
      screenOptions={{
        headerStyle: {
          backgroundColor: '#FFFFFF',         
        },
        headerTitleAlign: "center",
        headerTintColor: '#5A5A5A',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
      options={{ headerTitle: (props) => <LogoTitle {...props} /> }}
      >
        <Stack.Screen name="Home"  options={{ title: 'ONENERGY' }} component={HomeScreen} />
        <Stack.Screen name="Calendar" component={CalendarScreen} />
        <Stack.Screen name="Chart" component={ChartScreen}  options={({route}) => ({ date: route.params?.date})} />
      </Stack.Navigator>    
  )
}

export default AuthStack;