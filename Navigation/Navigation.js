import React from 'react'
import { StyleSheet, Image } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import ScreenTest from '../Components/ScreenTest'
import BaseConstruction from '../Components/BaseConstruction'
const ScreenTestStackNavigator = createStackNavigator({
  ScreenTest:{
    screen:ScreenTest,
    navigationOptions:{
       title: 'choixCode'
    }
  },
  BaseConstruction: {
    screen: BaseConstruction
  }
})
export default createAppContainer(ScreenTestStackNavigator)
