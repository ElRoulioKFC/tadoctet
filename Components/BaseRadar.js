import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ControleRadar from "./ControleRadar.js"
import Radar from "./Radar.js"
import { getGrille } from '../API/appelApi.js'

class BaseRadar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tableauRadar : []
    }
    this._creationRadar = this._creationRadar.bind(this)
  }

  async _creationRadar(){
    let tableauRadar = await getGrille({partieId: 0, x: 0, y: 0, d: 4});
    this.setState( {
      tableauRadar
    })
  }

  render(){
    return(
    <View style={styles.main_container}>
      <View style={styles.container_radar}>
        <Radar tableau = {this.state.tableauRadar}/>
      </View>
      <View style={styles.container_arrow}>
        <ControleRadar update={this._creationRadar}/>
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
