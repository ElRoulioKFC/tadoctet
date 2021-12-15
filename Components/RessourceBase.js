import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import Ressource from './Ressource.js'

class Aventure extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <View style={styles.main_container}>
        <Text style={styles.text}>{"RESSOURCE :"}</Text>
        <View style={styles.row}>
          <View style={styles.ressource}>
            <Ressource
              ressource = "bois"
              number = {this.props.bois}
            />
          </View>
          <View style={styles.ressource}>
            <Ressource
              ressource = "ferraille"
              number = {this.props.ferraille}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.ressource}>
            <Ressource
              ressource = "textile"
              number = {this.props.textile}
            />
          </View>
          <View style={styles.ressource}>
            <Ressource
              ressource = "medicament"
              number = {this.props.medicament}
            />
          </View>
        </View>
        <View style={styles.row}>
          <View style={styles.ressource}>
            <Ressource
              ressource = "alcool"
              number = {this.props.alcool}
            />
          </View>
          <View style={styles.ressource}>
          </View>
        </View>
      </View>


  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  row:{
    flexDirection : 'row',
    flex : 1
  },
  ressource : {
    flex : 1
  },
  text : {
    fontSize : 15
  }

})
export default Aventure
