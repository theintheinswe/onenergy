import React,  { useState} from 'react'
import {ScrollView, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HStack, VStack, Text, ListItem } from "@react-native-material/core";
import Card  from '../components/Card'
import Card2  from '../components/Card2'
import Space from '../components/Space'
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { BarChart } from "react-native-gifted-charts";


const ChartScreen = ({navigation, route}) => {

  const barData = [
    {value: 250, label: ''},
    {value: 500, label: '', frontColor: '#E74C3C'},
    {value: 745, label: '', frontColor: '#E74C3C'},
    {value: 320, label: ''},
    {value: 600, label: '', frontColor: '#E74C3C'},
    {value: 256, label: ''},
    {value: 300, label: ''},
    {value: 250, label: ''},
    {value: 500, label: '', frontColor: '#E74C3C'},
    {value: 745, label: '', frontColor: '#E74C3C'},
    {value: 320, label: ''},
    {value: 600, label: '', frontColor: '#E74C3C'},
    {value: 256, label: ''},
    {value: 300, label: ''},
    {value: 250, label: ''},
    {value: 500, label: '', frontColor: '#E74C3C'},
    {value: 745, label: '', frontColor: '#E74C3C'},
    {value: 320, label: ''},
    {value: 600, label: '', frontColor: '#E74C3C'},
    {value: 256, label: ''},
    {value: 300, label: ''},
  ];


  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#EDEDED'}}>
         <ScrollView style={{paddingLeft: 10, paddingRight: 10 }}>
         <Space />
         <Pressable onPress={() => {
              navigation.navigate('Calendar')
            }}
          >
          <Card>
            <HStack style={{justifyContent:'space-between', alignItems:"center"}}>
              <Text>  <Fontisto name="date" size={20}  />  </Text>
              < VStack style={{alignItems:"center"}}> <Text>Select Date</Text><Text>Today</Text> </VStack> 
              <Text>  <MaterialIcons name="keyboard-arrow-down" size={20}  /> </Text>
            </HStack>
          </Card> 
          </Pressable>
            
          <Space />

          <Card>            
            <HStack style={{justifyContent:'space-between', alignItems:"center"}}>
              <Text style={{borderRadius: 10, padding:10}}> Button </Text>
              <VStack style={{alignItems:"center"}}> <Text>$ Cost</Text></VStack> 
              <Text>  Carbon Footprint </Text>              
            </HStack>
          </Card> 

          <Space />

          <Card2>
            <Text variant="button">892.34 kWh</Text>
            <BarChart
              barWidth={5}
              noOfSections={5}
              barBorderRadius={0}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
              hideRules
              showReferenceLine1
              referenceLine1Position={0}
              referenceLine1Config={{
                color: 'gray',
                dashWidth: 2,
                dashGap: 3,
              }}
            />
             <Space />
             <Text variant="subtitle2">Comparison to previous preroid</Text>
             <ListItem
              title="Trash"
              trailing={props => <Text> 892.34 kWh </Text>}
            />
            <ListItem
              title="Spam"
              trailing={props => <Text> 892.34 kWh </Text>}
            />
          </Card2>             
         </ScrollView>   
    </SafeAreaView>
  )
}

export default ChartScreen;