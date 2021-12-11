import React from 'react'
import {Text,StyleSheet,View,Image} from 'react-native'


class Ressource extends React.Component {
  constructor(props){
    super(props)
    this.ressource = props.ressource
    this.number = props.number
  }
  _afficheImage(ressource){
      switch(ressource){
        case 'textile':
          var path = require("../Images/textile.png")
          break;
        case 'alcool':
          var path = require("../Images/alcool.png")
          break;
        case 'bois':
          var path = require("../Images/bois.png")
          break;
        case 'ferraille':
          var path = require("../Images/ferraille.png")
          break;
        case 'medicament':
          var path = require("../Images/medicament.png")
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
        {this._afficheImage(this.ressource)}
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
    height : 15,
    width : 15
  },
  text :{
    fontSize : 8,
  }
})
export default Ressource
