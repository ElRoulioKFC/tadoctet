import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Batiment from "./Batiment.js"
class BaseConstruction extends React.Component {
  render(){
    return(
    <View>
    <Batiment/>
    <Text>base construction</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({

})
export default BaseConstruction