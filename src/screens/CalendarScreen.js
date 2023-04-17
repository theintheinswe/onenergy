import React, {useState} from 'react'
import { View , Text} from 'react-native'
import {CalendarList} from 'react-native-calendars';

const CalendarScreen = ({navigation}) => {
    const [selected, setSelected] = useState('');
  return (
    <CalendarList
      onDayPress={day => {
        setSelected(day.dateString);
        navigation.navigate('Chart', {
            date: day.dateString
        })
      }}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        // Set custom calendarWidth.

    />
  )
}

export default CalendarScreen