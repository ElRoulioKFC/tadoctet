import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Batiment from "./Batiment.js"
import Cost from "./Cost.js"
import RessourceBase from './RessourceBase.js'
class BaseConstruction extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
    <View style={styles.main_container}>
      <View style={styles.container_ressource}>

        <RessourceBase
          bois = {3}
          ferraille = {3}
          alcool = {3}
          medicament = {3}
          textile = {3}
        />
      </View>
      <View style={styles.container_batiment}>
        <Batiment
          nom = {"Base"}
          niveau = {"0"}
          bois = {3}
          ferraille = {3}
          alcool = {3}
          medicament = {3}
          textile = {3}
        />
      </View>

    </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1
  },
  container_batiment :{
    flex : 8
  },
  container_ressource : {
    flex : 1
  }
})
export default BaseConstruction
