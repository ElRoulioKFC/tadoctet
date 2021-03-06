import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Pressable} from 'react-native'
import BoutonAction from './BoutonAction.js'
import StatJoueur from './StatJoueur.js'

class ActionAventure extends React.Component {
  constructor(props){
    super(props)
    this.listeChoix = props.listeChoix
    this.deplacement = props.deplacement
  }
  _deplacement(){
    return (
      <View style = {styles.main_container}>
        <View style={styles.row}>

        <View style={styles.empty} >
        </View>

        <Pressable style={styles.pressable} >
          <Text style={styles.texte}>N</Text>
        </Pressable>

        <View style={styles.empty} >
        </View>

      </View>

      <View style={styles.row}>

      <Pressable style={styles.pressable} >
        <Text style={styles.texte}>O</Text>
      </Pressable>

      <View style={styles.empty} >
      </View>

      <Pressable style={styles.pressable} >
        <Text style={styles.texte}>E</Text>
      </Pressable>
      </View>

      <View style={styles.row}>

      <View style={styles.empty} >
      </View>

      <Pressable style={styles.pressable} >
        <Text style={styles.texte}>S</Text>
      </Pressable>

      <View style={styles.empty} >
      </View>

      </View>
      </View>

    )
  }
  _action(listeChoix){
    var boutons = [];
    listeChoix.forEach((action,i) => {
      boutons.push(<BoutonAction key= {i}texte={action} />)
    });
    return(
      <View style = {styles.container}>
      {boutons}
      </View>
    )
  }


  render(){
    return(
      <View style = {styles.main_container}>
        <View style = {styles.container_bouton}>
          {this._action(this.listeChoix)}
        </View>
        <View style = {styles.container_life}>
          <StatJoueur endurance={this.props.endurance} agilite={this.props.agilite} force={this.props.force} perception={this.props.perception} niveau={this.props.endurance + this.props.force + this.props.agilite + this.props.perception} pv = {this.props.pv}/>
        </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container :{
    flex : 1,
    flexDirection : 'row'
  },
  row :{
    flexDirection : 'row',
    flex : 1
  },
  pressable : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'white',
    borderRadius: 4,
  },
  texte : {
    flex : 1,
    fontSize : 80,
    color : 'white'
  },
  empty : {
    flex : 1,
  },
  container : {
    flex : 1
  },
  container_life : {
    flex : 1
  },
  container_bouton : {
    flex : 2
  }
})
export default ActionAventure
