import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';


class Radar extends React.Component {
  constructor(props){
    super(props)

  }
    
  _innerRadar(tableauRadar){
    var quadrillage = [];
    var quadrillageFinal = [];
    var idChildren = 0
    for (var i = 0; i < tableauRadar.length; i++) {
      for (var j = 0; j < tableauRadar[i].length; j++) {
        switch(tableauRadar[i][j]){
          case 'base':
            quadrillage.push(<View key={idChildren} style={styles.container_base}></View>)
            break;
          case 'empty':
            quadrillage.push(<View key={idChildren}  style={styles.container_empty}></View>)
            break;
          case 'joueur':
            quadrillage.push(<View key={idChildren}  style={styles.container_joueur}></View>)
            break;
          case 'menace':
            quadrillage.push(<View key={idChildren}  style={styles.container_menace}></View>)
            break;
          case 'bonSigne':
            quadrillage.push(<View key={idChildren}  style={styles.container_bonSigne}></View>)
            break;
          default :
            quadrillage.push(<View key={idChildren}  style={styles.container_empty}></View>)
            break;
          }
          idChildren++;
      }
      quadrillageFinal.push(<View key={idChildren} style={styles.row}>{quadrillage}</View>);
      quadrillage = []
      idChildren++;
    }

    return(

        <View style={styles.main_container}>
          {quadrillageFinal}
        </View>

    )
  }
  render(){
    return(
    <View style={styles.main_container}>
      {this._innerRadar(this.props.tableau)}
    </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container :{
    flex : 1,
    backgroundColor : '#1aff1a'
  },
  container_empty : {
    flex : 1,
    backgroundColor : '#c2c2d6',
    margin : 2
  },
  container_base : {
    flex : 1,
    backgroundColor : 'white',
    margin : 2
  },
  container_joueur : {
    flex : 1,
    backgroundColor : '#008080',
    margin : 2
  },
  container_menace : {
    flex : 1,
    backgroundColor : '#ff1a1a',
    margin : 2
  },
  container_bonSigne : {
    flex : 1,
    backgroundColor : '#004d00',
    margin : 2
  },
  row : {
    flexDirection : 'row',
    flex : 1
  }
})
export default Radar
