import React from 'react'
import {Text,StyleSheet,View,Image} from 'react-native'


class Stat extends React.Component {
  constructor(props){
    super(props)
    this.stat = props.stat
    this.number = props.number
  }
  _afficheImage(ressource){
      switch(ressource){
        case 'force':
          var path = require("../Images/musculation.png")
          break;
        case 'endurance':
          var path = require("../Images/sport.png")
          break;
        case 'agilite':
          var path = require("../Images/obstacle.png")
          break;
        case 'perception':
          var path = require("../Images/cible.png")
          break;
        case 'niveau':
          var path = require("../Images/perso.png")
          break;
        default :
          var path = require("../Images/unknow.png")
          break;
      }
      return(
        <Image
          style={styles.image}
          source={path}
        />
      )
    }
  render(){
    return(
      <View style={styles.main_container}>
        <View style={styles.container_image}>
          {this._afficheImage(this.stat)}
        </View>

        <View style={styles.container_text}>
          <Text style={styles.text}>{this.number}</Text>
        </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container_image:{
    flex : 2,
  },
  container_text:{
    flex : 1
  },
  image : {
    height : 30,
    width : 30
  },
  text :{
    fontSize : 25,
  }
})
export default Stat
