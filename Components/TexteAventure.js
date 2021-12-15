import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,ScrollView} from 'react-native'


class TexteAventure extends React.Component {
  render(){
    return(
      <ScrollView style={styles.main_container}>
        <Text style={styles.texte}>
          Vous arrivez dans un secteur qui semble désert.
          Il y a une rivière qui coule au loin.
          Et un tas de ferraille se trouve devant vous.
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
