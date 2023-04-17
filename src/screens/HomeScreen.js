import React  from 'react'
import {  Pressable, ScrollView , Dimensions, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { HStack, VStack, Stack, Box , Button, Text} from "@react-native-material/core";
import Card  from '../components/Card'
import Card2  from '../components/Card2'
import Space from '../components/Space'
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const windowWidth = Dimensions.get('window').width - 40;

const HomeScreen = ({navigation}) => {
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
                  <Text>  <Fontisto name="date" size={20}  /> </Text>
                  < VStack style={{alignItems:"center"}}> <Text>Select Date</Text><Text>Today</Text> </VStack> 
                  <Text>  <MaterialIcons name="keyboard-arrow-down" size={20}  /> </Text>
                </HStack>
              </Card> 
             </Pressable>

             <Space />

              <Card2>
                <HStack m={5}>
                  <Box w={windowWidth/2} h={300} style={{ backgroundColor: "tomato" }} />
                  <Box w={windowWidth/2} h={300}  >
                     <VStack>
                     <Box w={windowWidth/2} h={150}  style={{ backgroundColor: "#5A5A5A" }} />
                     <Box w={windowWidth/2} h={100} style={{ backgroundColor: "#bbb" }} />
                     <Box w={windowWidth/2} h={50} style={{ backgroundColor: "#D3D3D3" }} />
                      </VStack>
                  </Box>
                </HStack>
              </Card2>

              <Space />
              
              <Card2>
                <Stack m={5}>
                  <Text variant="h6">h6. Heading</Text>                  
                  <Box>
                    <HStack style={{justifyContent:'space-between', alignItems:"center"}}>
                    <Button
                      color="error"
                      title="892.34 kWh"
                      leading={props => <Fontisto name="flash" size={20}  />}                      
                    />
                    <View>
                      <Text> <Fontisto name="dollar" size={30} /> 2.61 SDG </Text>                      
                    </View>
                    </HStack>
                  </Box>
                </Stack>
              </Card2>
         </ScrollView>   
    </SafeAreaView>
  )
}

export default HomeScreen;