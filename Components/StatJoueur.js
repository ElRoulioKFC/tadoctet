import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Image} from 'react-native'
import AllStat from './AllStat.js'
import PointVie from './PointVie.js'

class StatJoueur extends React.Component {
  constructor(props){
    super(props)
    this.endurance = props.endurance
    this.agilite = props.agilite
    this.force = props.force
    this.perception = props.perception
    this.pv = props.pv
    this.pvMax = 10 * props.endurance
    this.niveau = props.niveau
  }
  render(){
    return(
      <View style={styles.main_container}>
        <View style={styles.container}>
          <PointVie niveau={this.niveau} pv={this.pv} pvMax={this.pvMax}/>    
        </View>

        <View style={styles.container}>
          <AllStat endurance={this.endurance} agilite={this.agilite} force={this.force} perception={this.perception}/>
        </View>

      </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1
  },
  container : {
    flex : 1
  }
})
export default StatJoueur
