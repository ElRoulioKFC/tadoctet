import React from 'react'
import {Text,StyleSheet,View} from 'react-native'
import Stat from './Stat.js'

class PointVie extends React.Component {
  constructor(props){
    super(props)
    this.pv = props.pv
    this.pvMax = props.pvMax

  }

  _greenCalc(pv,pvMax){
    console.log("ici")
    const flexVert = Math.floor(pv / pvMax * 100)
    return{
      backgroundColor : 'green',
       flex : flexVert,
     }
  }
  _redCalc(pv,pvMax){
    console.log("la")

    const flexRouge = 100 - (Math.floor(pv / pvMax * 100))
    return{backgroundColor : 'red',
     flex : flexRouge,
   }
  }

  render(){
    return(
      <View style={styles.main_container}>
        <View style={styles.container}>
          <View style={styles.container}>
          <Text style={styles.texte}>PV : </Text>
          </View>
            <View style={{flex : 1,flexDirection : 'row', backgroundColor : 'black'}}>
            <View style={{flex : 1,flexDirection : 'row',margin : 2}}>
              <View style= {this._greenCalc(this.props.pv,this.props.pvMax)}>
              </View>
              <View style= {this._redCalc(this.props.pv,this.props.pvMax)}>
              </View>
            </View>
            </View>
        </View>

        <View style={styles.container}>
           <Stat stat = {"niveau"} number = {this.props.niveau}/>
        </View>

      </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1,
  },
  container : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  texte : {
    flex : 1,
    fontSize : 25,
    fontWeight : 'bold'
  }
})
export default PointVie
