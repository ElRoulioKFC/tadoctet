import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ControleRadar from "./ControleRadar.js"
import Radar from "./Radar.js"

class BaseRadar extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tableauRadar : []
    }
    this._creationRadar = this._creationRadar.bind(this)

  }
  _creationRadar(){
    this.setState({tableauRadar :  [['empty','bonSigne','menace','bonSigne'],
                                    ['empty','base','bonSigne','empty'],
                                    ['empty','joueur','empty','joueur'],
                                    ['bonSigne','empty','menace','bonSigne']]
                                  })
    console.log(this.tableauRadar)
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
