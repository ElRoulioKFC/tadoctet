import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TexteAventure from './TexteAventure.js';
import ActionAventure from './ActionAventure.js';

class Aventure extends React.Component {



  render(){
    return(
    <View style = {styles.main_container}>
      <View style = {styles.container_text}>
        <TexteAventure/>
      </View>
      <View style = {styles.container_action}>
        <ActionAventure listeChoix = {['combattre','bouger','attaquer','entrer','fouiller']}/>
      </View>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1
  },
  container_text : {
    flex : 4,
    backgroundColor : 'white'
  },
  container_action : {
    flex : 3,
    backgroundColor : 'white'
  }
})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export connect(mapStateToProps)(Aventure)
