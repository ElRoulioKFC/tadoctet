import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Batiment from "./Batiment.js"
import Cost from "./Cost.js"

class BaseConstruction extends React.Component {

  render(){
    return(
    <View>
    <Batiment
      nom = {"Base"}
      niveau = {"0"}
      bois = {3}
      ferraille = {3}
      alcool = {3}
      medicament = {3}
      textile = {3}
    />

    <Text>base construction</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({

})
export default BaseConstruction
