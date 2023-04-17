import React from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AuthStack from "../navigation/AuthStack"

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed!</Text>
    </View>
  );
}

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialBottomTabNavigator();

function FooterTabs () {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#E74C3C"  
      independent={true}              
      //screenOptions={{ headerShown: false, tabBarLabel:false }}
      tabBarOptions={{
        style: {
          height: 50,
        },
        tabStyle: {
          height: 50,
          backgroundColor: '#fff',
        },
      }}
     >
      <Tab.Screen
        name="Home"
        component={AuthStack}       
        options={{          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Plug"
        component={Notifications}        
        options={{  
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="power-plug" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={Notifications}       
        options={{          
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chart-bar" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}       
        options={{         
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const Footer = () => {
    return (
      <NavigationContainer>
        <FooterTabs />
      </NavigationContainer>
    )
  }
  
export default Footer;