import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,ScrollView} from 'react-native'


class TexteAventure extends React.Component {
  constructor(super){
    super(props)
  }
  render(){
    return(
      <ScrollView style={styles.main_container}>
        <Text style={styles.texte}>
          {this.props.texte}
        </Text>
      </ScrollView>
  )
  }
}
const styles = StyleSheet.create({
  main_container : {
    flex : 1,
    backgroundColor : 'black'
  },
  texte : {
    flex : 1,
    color : 'white',
    fontSize : 22
  }
})
export default TexteAventure
