import React from 'react'
import {StyleSheet,View,TouchableOpacity} from 'react-native'
import Batiment from "./Batiment.js"
import RessourceBase from './RessourceBase.js'
import requester from '../API/requester'

class BaseConstruction extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      bois : 0,
      ferraille : 0,
      textile : 0,
      medicament : 0,
      alcool : 0,
      batiments: []
    }
    this._getRessourceFromApi()
  }

  componentDidMount(){
    let batiments = [];

    requester.getBaseBatiments()
      .then(data => {
        Object.keys(data).forEach( (k, i) => {
          let b = data[k]
          let requirements = b.requirements[b.lvl]
          console.log(batiments)
          batiments.push(
            <Batiment
              key={i}
              nom = {b.name}
              lvl = {b.lvl}
              bois = {requirements.bois}
              ferraille = {requirements.ferraille}
              alcool = {requirements.alcool}
              medicament = {requirements.medicament}
              textile = {requirements.textile}
              upgrade = {requester.construire}
            />)
          this.setState({batiments})
        })
      })
  }

  async _getRessourceFromApi(){
    let ressources = await requester.getBaseRessources()
    console.log(ressources);
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
        {this.state.batiments}
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
