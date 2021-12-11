import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Image,Button,Pressable} from 'react-native'
import Cost from "./Cost.js"

class Batiment extends React.Component {
  constructor(props) {
    super(props)
    this._sourceImage = require("../Images/base.png")
    this.nom = props.nom
  }
  render(){
    return(

      <View style={styles.main_container}>

        <View style={styles.container_image}>
        <Text style={styles.lvl}>{"lvl.0"}</Text>
          <Image
            style={styles.image}
            source={this._sourceImage}
          />
        </View>

        <View style={styles.container_info}>

          <View style={styles.container_name}>
            <Text style={styles.title}>{this.nom} </Text>
          </View>

          <View style={styles.container_build}>
            <View style={styles.container_button}>
              <Pressable style={styles.button_construction} >
                <Text style={styles.text_button}>Construire</Text>
              </Pressable>

            </View>

            <View style={styles.container_cost}>
              <Cost
                style={styles.cost}
                bois = {3}
                ferraille = {3}
                alcool = {3}
                medicament = {3}
                textile = {3}

              />
            </View>
          </View>
        </View>


      </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container :{
    flexDirection:'row',
    backgroundColor: '#d2d6d3',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image : {
    height: 50,
    width : 50,
    flex : 1,
    margin : 10
  },
  container_image :{
    alignItems: 'center',
    justifyContent: 'center',
    flex : 1

  },
  container_info:{
    flex : 4
  },
  container_build : {
    flexDirection:'row',
    height : '100%',
    flex : 2

  },
  container_name : {
  },
  title : {
    fontWeight : 'bold',
    textAlign : 'center',
    fontSize : 30
  },
  button_construction:{
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#0f74aa',
    flex : 1
  },
  text_button : {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25
  },


  container_button : {
    flex : 2
  },
  lvl : {
    fontSize: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    flex : 1
  },
  container_cost : {
    alignItems: 'center',
    justifyContent: 'center',
    flex : 1,
    height : '100%',
    width:'100%',
  },
  cost : {
    flex : 1,
    width : "100%"
  }
})
export default Batiment
