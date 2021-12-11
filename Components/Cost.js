import React from 'react'
import {Text,StyleSheet,View,Image} from 'react-native'
import Ressource from "./Ressource.js"

class Cost extends React.Component {



  constructor(props){
    super(props)
    //props contiennent le nombre de chaque ressources
    this.bois = props.bois
    this.ferraille = props.ferraille
    this.alcool = props.alcool
    this.medicament = props.medicament
    this.textile = props.textile
  }

  _afficheBois(){
    if (this.bois > 0){
      return(
        <Ressource
          ressource = "bois"
          number = {this.bois}
        />
      )
    }
  }
  _afficheFerraille(){
    if (this.ferraille > 0){
      return(
        <Ressource
          ressource = "ferraille"
          number = {this.ferraille}
        />
      )
    }
  }
  _afficheTextile(){
    if (this.textile > 0){
      return(
        <Ressource
          ressource = "textile"
          number = {this.textile}
        />
      )
    }
  }
  _afficheMedicament(){
    if (this.medicament > 0){
      return(
        <Ressource
          ressource = "medicament"
          number = {this.medicament}
        />
      )
    }
  }
  _afficheAlcool(){
    if (this.alcool > 0){
      return(
        <Ressource
          ressource = "alcool"
          number = {this.alcool}
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
