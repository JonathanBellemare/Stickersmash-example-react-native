import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import HomeScreen from '../screens/HomeScreen';
import Leagues from '../screens/Leagues';
import ProfileScreen from '../screens/Profile';

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="Home"
            shifting={true}
            sceneAnimationEnabled={false}
            activeColor='#ff8557'
            inactiveColor='#0782F9'
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: 'home'
                }}
            />
            <Tab.Screen
                name="Leagues"
                component={Leagues}
                options={{
                    tabBarIcon: 'account-group',
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: 'account-box',
                }}
            />
        </Tab.Navigator>
    );
};
