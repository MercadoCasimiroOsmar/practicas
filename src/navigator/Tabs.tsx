
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import React from 'react';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';
import { Tab4Screen } from '../screens/Tab4Screen';
import Icon from 'react-native-vector-icons/Ionicons';
import { Center, Square, Circle } from 'native-base';

import { Platform, Text } from 'react-native'
import { TopTab } from './TopTab';


export const Tabs = () => {
    return Platform.OS === 'ios' ? <TabsIOS /> : <TabsAndroid />
}


const BottomTabAndroid = createMaterialBottomTabNavigator();


function TabsAndroid() {
    return (

        <BottomTabAndroid.Navigator

            barStyle={{ backgroundColor: '#ffffff' }}

            sceneAnimationEnabled={true}
            screenOptions={({ route }) => ({

                tabBarIcon: (props) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'home-outline'
                            break;

                        case 'Tab2Screen':
                            iconName = 'newspaper-outline'
                            break;

                        case 'Tab3Screen':
                            iconName = 'book-outline'
                            break;

                        case 'Tab4Screen':
                            iconName = 'notifications-circle-outline'
                            break;
                    }
                    return <Icon name={iconName} size={20} color="#000000" />;
                }
            })
            }

        >
            <BottomTabAndroid.Screen name="Tab1Screen" options={{ title: "Inicio" }} component={Tab1Screen} />
            <BottomTabAndroid.Screen name="Tab2Screen" options={{ title: "Genero" }} component={Tab2Screen} />
            <BottomTabAndroid.Screen name="Tab3Screen" options={{ title: "Biblioteca" }} component={Tab3Screen} />
            <BottomTabAndroid.Screen name="Tab4Screen" options={{ title: "Entrega" }} component={Tab4Screen} />
        </BottomTabAndroid.Navigator>
    );
}

const BottomTabIOS = createBottomTabNavigator();

export const TabsIOS = () => {
    return (
        <BottomTabIOS.Navigator
            screenOptions={({ route }) => ({

                tabBarIcon: (props) => {

                    let iconName: string = '';
                    switch (route.name) {
                        case 'Tab1Screen':
                            iconName = 'T1'
                            break;

                        case 'Tab2Screen':
                            iconName = 'T2'
                            break;

                        case 'Tab3Screen':
                            iconName = 'T3'
                            break;

                        case 'Tab4Screen':
                            iconName = 'T4'
                            break;
                    }
                    return <Text style={{ color: props.color }}>{iconName}</Text>
                }
            })
            }
        >
            <BottomTabIOS.Screen name="Tab1Screen" options={{ title: "Home" }} component={Tab1Screen} />
            <BottomTabIOS.Screen name="Tab2Screen" options={{ title: "Notifications" }} component={Tab2Screen} />
            <BottomTabIOS.Screen name="Tab3Screen" options={{ title: "Profile" }} component={Tab3Screen} />
            <BottomTabIOS.Screen name="Tab4Screen" options={{ title: "Settings" }} component={Tab4Screen} />

        </BottomTabIOS.Navigator>
    );
}


