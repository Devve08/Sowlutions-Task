import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../container/app/home/home';
import Article from '../container/app/article/article';

const StackNavigator = createStackNavigator();

const MainStack: React.FC = () => {
  return (
    <StackNavigator.Navigator initialRouteName={'main'}>
      <StackNavigator.Screen
        name="home"
        component={Home}
        options={{headerShown: false}}
      />

      <StackNavigator.Screen
        name="article"
        component={Article}
        options={{headerShown: false}}
      />
    </StackNavigator.Navigator>
  );
};

export default MainStack;
