import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Pressable} from 'react-native'


class ActionAventure extends React.Component {

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

  render(){
    return(
      <View style = {styles.main_container}>
        {this._deplacement()}
      </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container :{
    flex : 1,
  },
  row :{
    flexDirection : 'row',
    flex : 1
  },
  pressable : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'blue',
    borderRadius: 4,
  },
  texte : {
    flex : 1,
    fontSize : 80,
    color : 'white'
  },
  empty : {
    flex : 1,
  }
})
export default ActionAventure
