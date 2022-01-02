import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Batiment from "./Batiment.js"
import Cost from "./Cost.js"
import RessourceBase from './RessourceBase.js'
import {getRessource,getHello} from '../API/appelApi.js'
class BaseConstruction extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bois : 0,
      ferraille : 0,
      textile : 0,
      medicament : 0,
      alcool : 0
        }
  }
  _action(listeBatiment){
    var batiments = [];
    listeBatiment.forEach((batiment,i) => {
      batiments.push(  <Batiment
          key={i}
          nom = {batiment.nom}
          niveau = {batiment.niveau}
          bois = {batiment.cout.bois}
          ferraille = {batiment.cout.ferraille}
          alcool = {batiment.cout.alcool}
          medicament = {batiment.cout.medicament}
          textile = {batiment.cout.textile}
        />)
    });
    return(
      <View style = {styles.container}>
      {batiments}
      </View>
    )
  }

  async _getRessourceFromApi(){
    var idPartie = 0
    var ressources = await getRessource({idPartie})
    this.setState({bois : ressources.bois, ferraille : ressources.ferraille,textile : ressources.textile,medicament : ressources.medicament,alcool : ressources.alcool })
  }
  render(){
    return(
    <View style={styles.main_container}>
      <View style={styles.container_ressource}>
        <TouchableOpacity
        style={styles.container_ressource}
        onPress={() =>{this._getRessourceFromApi()}}
        >
          <RessourceBase
            bois = {this.state.bois}
            ferraille = {this.state.ferraille}
            alcool = {this.state.alcool}
            medicament = {this.state.medicament}
            textile = {this.state.textile}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container_batiment}>
        <Batiment
          style={{flex : 1}}
          nom = {"Salle de musculation"}
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
  },
  container : {
    flex : 1
  }
})
export default BaseConstruction
