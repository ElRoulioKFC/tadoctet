import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Pressable} from 'react-native'


class BoutonAction extends React.Component {
  constructor(props){
    super(props)
    this.texte = props.texte
  }
  render(){
    return(
      <View style={styles.main_container}>
        <Pressable style={styles.pressable}>
          <View style={styles.container_text}>
            <Text adjustsFontSizeToFit={true} style={styles.texte}>{this.texte}</Text>
          </View>
        </Pressable>
        <View style = {styles.container}>
        </View>
      </View>

  )
  }
}

const styles = StyleSheet.create({
  main_container:{
    flex : 1,
    margin : 5
  },
  pressable : {
    flex : 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'black',
  },
  texte : {
    flex : 1,
    fontSize : 50,
    color : 'white',
    fontWeight : 'bold',
    textTransform: 'uppercase',



  },
  container_text : {
    flex : 1,
    textAlign : 'center',
    textAlignVertical: 'center',
  },
  container : {
    flex : 1
  }
})
export default BoutonAction
