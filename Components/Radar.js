import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import CaseRadar from './CaseRadar.js'

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
        quadrillage.push(<CaseRadar key={idChildren} type={tableauRadar[i][j]} />)
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
    backgroundColor : '#33ff33'
  },
  row : {
    flexDirection : 'row',
    flex : 1
  }
})
export default Radar
