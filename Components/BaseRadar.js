import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ControleRadar from "./ControleRadar.js"
import Radar from "./Radar.js"

class BaseRadar extends React.Component {
  _creationRadar(){
    return [['empty','bonSigne','menace','bonSigne'],['empty','base','bonSigne','empty'],['empty','joueur','empty','joueur'],['bonSigne','empty','menace','bonSigne']]
  }
  render(){
    return(
    <View style={styles.main_container}>
      <View style={styles.container_radar}>
        <Radar tableau = {this._creationRadar()}/>
      </View>
      <View style={styles.container_arrow}>
        <ControleRadar/>
      </View>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container :{
    flex : 1
  },
  container_radar :{
    flex : 2,
    backgroundColor : "grey"
  },
  container_arrow :{
    flex : 1
  }
})
export default BaseRadar
