import React from 'react'
import { View } from 'react-native';
import { AppBar, HStack, IconButton } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/Ionicons';

const Layout = ({children}) => {
  return (
    <View>
         <AppBar
            title="Title"
            subtitle="Lorem ipsum"
            centerTitle={true}
            leading={props => (
            <IconButton icon={props => <Icon name="menu" {...props} />} {...props} />
            )}
            trailing={props => (
            <IconButton
                icon={props => <Icon name="dots-vertical" {...props} />}
                {...props}
            />
            )}
        />
        {children}
    </View>
  )
}

export default Layout