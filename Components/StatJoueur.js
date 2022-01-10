import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Image} from 'react-native'
import AllStat from './AllStat.js'
import PointVie from './PointVie.js'

class StatJoueur extends React.Component {
  constructor(props){
    super(props)
    this.pvMax = 10 * this.props.endurance
  }
  render(){
    return(
      <View style={styles.main_container}>
        <View style={styles.container}>
          <PointVie niveau={this.props.niveau} pv={this.props.pv} pvMax={this.pvMax}/>
        </View>

        <View style={styles.container}>
          <AllStat endurance={this.props.endurance} agilite={this.props.agilite} force={this.props.force} perception={this.props.perception}/>
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
