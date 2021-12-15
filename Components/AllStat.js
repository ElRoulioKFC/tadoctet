import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import Stat from './Stat.js'

class AllStat extends React.Component {
  constructor(props){
    super(props)
    this.endurance = props.endurance
    this.agilite = props.agilite
    this.force = props.force
    this.perception = props.perception
  }
  render(){
    return(
      <View style={styles.main_container}>

        <View style={styles.row}>
          <View style={styles.stat}>
            <Stat stat = {"force"} number = {this.force}/>
          </View>
          <View style={styles.stat}>
            <Stat stat = {"endurance"} number = {this.endurance}/>
          </View>
        </View>

        <View style={styles.row}>
          <View style={styles.stat}>
            <Stat stat = {"agilite"} number = {this.agilite}/>
          </View>
          <View style={styles.stat}>
            <Stat stat = {"perception"} number = {this.perception}/>
          </View>
        </View>
      </View>

  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1
  },
  row : {
    flex : 1,
    flexDirection : 'row'
  },
  stat : {
    flex : 1
  }
})
export default AllStat
