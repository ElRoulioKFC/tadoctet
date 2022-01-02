import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
class CaseRadar extends React.Component {
  constructor(props){
    super(props)

  }

  _innerRadar(type){
    console.log(type)
    switch(type){
      case 'base':
        return <View style={styles.container_base}></View>
        break;
      case 'joueur':
        return <View style={styles.container_joueur}></View>
        break;
      case 'menace':
        return <View style={styles.container_menace}></View>
        break;
      case 'bonSigne':
        return <View style={styles.container_bonSigne}></View>
        break;
      default :
        break;
      }
      }
  render(){
    return(
    <View style={styles.main_container}>
      {this._innerRadar(this.props.type)}
    </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1,
    backgroundColor : '#001b00',
    margin : 2,
    alignItems: 'center',
    justifyContent: 'center',

  },
  container_base : {
    backgroundColor : 'white',
    borderRadius : 1000,
    height : '45%',
    width : '50%',
  },
  container_joueur : {
    backgroundColor : '#0080cc',
    borderRadius : 1000,
    height : '45%',
    width : '50%',
  },
  container_menace : {
    backgroundColor : '#e60000',
    borderRadius : 1000,
    height : '45%',
    width : '50%',
  },
  container_bonSigne : {
    backgroundColor : '#00b300',
    borderRadius : 1000,
    height : '45%',
    width : '50%',
  },
})
export default CaseRadar
