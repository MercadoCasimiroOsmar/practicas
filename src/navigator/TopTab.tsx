import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native-paper';
import { Center, Square, Circle } from 'native-base';
const Tab = createMaterialTopTabNavigator();

export const TopTab = () => {

  return (
    <Tab.Navigator

    screenOptions={({route}) => ({
      tabBarPressColor: '#ffa031',
      tabBarShowIcon: true,
      tabBarIndicatorStyle: {
        backgroundColor: '#ffa031',
      },
      tabBarStyle: {
        //en ios es shadowColor:"transparent"
        elevation: 0,
      },
      tabBarIcon: ({color}) => {
        let iconName: string = '';
        switch (route.name) {
          case 'Chat':
            iconName = 'Ch';
            break;

          case 'Contacts':
            iconName = 'Co';
            break;

          case 'Albums':
            iconName = 'Al';
            break;
        }
        return <Text style={{color}}>{iconName}</Text>;
      },
    })}

    >
      
    </Tab.Navigator>
  );
}