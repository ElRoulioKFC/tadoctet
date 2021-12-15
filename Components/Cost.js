import React from 'react'
import {Text,StyleSheet,View,Image} from 'react-native'
import Ressource from "./Ressource.js"

class Cost extends React.Component {



  constructor(props){
    super(props)

  }

  _afficheBois(){
    if (this.props.bois > 0){
      return(
        <Ressource
          ressource = "bois"
          number = {this.props.bois}
        />
      )
    }
  }
  _afficheFerraille(){
    if (this.props.ferraille > 0){
      return(
        <Ressource
          ressource = "ferraille"
          number = {this.props.ferraille}
        />
      )
    }
  }
  _afficheTextile(){
    if (this.props.textile > 0){
      return(
        <Ressource
          ressource = "textile"
          number = {this.props.textile}
        />
      )
    }
  }
  _afficheMedicament(){
    if (this.props.medicament > 0){
      return(
        <Ressource
          ressource = "medicament"
          number = {this.props.medicament}
        />
      )
    }
  }
  _afficheAlcool(){
    if (this.props.alcool > 0){
      return(
        <Ressource
          ressource = "alcool"
          number = {this.props.alcool}
        />
      )
    }
  }
  render(){
    return(
    <View style={styles.main_container}>
      <Text style={styles.text}>{"COUT :"}</Text>
      <View style={styles.row}>
        <View style={styles.ressource}>
          {this._afficheBois()}
        </View>
        <View style={styles.ressource}>
          {this._afficheAlcool()}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.ressource}>
          {this._afficheTextile()}
        </View>
        <View style={styles.ressource}>
          {this._afficheFerraille()}
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.ressource}>
          {this._afficheMedicament()}
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
export default Cost
