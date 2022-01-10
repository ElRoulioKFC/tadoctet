import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Image,Button,Pressable} from 'react-native'
import Cost from "./Cost.js"

class Batiment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      bois: null,
      ferraille: null,
      alcool: null,
      medicament: null,
      textile: null,
      lvl: null
    }
    this._sourceImage = require("../Images/base.png")
  }

  componentDidMount() {
    const {bois, ferraille, alcool, medicament, textile, lvl} = this.props
    this.setState({
      bois,
      ferraille,
      alcool,
      medicament,
      textile,
      lvl
    });
  }

  render(){
    return(

      <View style={styles.main_container}>

        <View style={styles.container_image}>
        <Text style={styles.lvl}>{"lvl." + this.state.lvl +""}</Text>
          <Image
            style={styles.image}
            source={this._sourceImage}
          />
        </View>

        <View style={styles.container_info}>

          <View style={styles.container_name}>
            <Text style={styles.title}>{this.props.nom} </Text>
          </View>

          <View style={styles.container_build}>
            <View style={styles.container_cost}>
              <Cost
                style={styles.cost}
                bois = {this.state.bois}
                ferraille = {this.state.ferraille}
                alcool = {this.state.alcool}
                medicament = {this.state.medicament}
                textile = {this.state.textile}

              />
            </View>
            <View style={styles.container_button}>
              <Pressable style={styles.button_construction} onPress={() => {
                this.props.upgrade(this.props.nom)
                .then( batiment => {
                  let requirements = batiment.requirements[batiment.lvl];
                  this.setState(requirements)
                  this.setState({lvl: batiment.lvl})
                })
              }}>
                <Image
                  style={styles.image}
                  source={require("../Images/upgrade.png")}
                />
              </Pressable>

            </View>
            <View style={styles.container_button}>
              <Pressable style={styles.button_construction} >
                <Image
                style={styles.image}

                  source={require("../Images/info.png")}
                />
              </Pressable>

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
    flex : 1,
    height : '90%',
    width : '90%'
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
    height : '60%',
    width : '60%'
  },
  text_button : {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.25
  },


  container_button : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
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
