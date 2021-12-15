import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Pressable,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sac from './Sac.js'
class Inventaire extends React.Component {
  render(){
    return(
      <View style={styles.main_container}>
        <View style={styles.container_sac}>
          <Sac/>
        </View>

        <View style={styles.container_button}>
            <Pressable style={styles.pressable_button}>
              <View style={styles.container_image}>
                <Image
                style={styles.image}
                source={require("../Images/haut.png")}
                />
              </View>
              <View style={styles.container_text}>
                <Text adjustsFontSizeToFit={true} style={styles.texte}>{"sol"}</Text>
              </View>
            </Pressable>
            <View style={styles.border}>
            </View>
            <Pressable style={styles.pressable_button}>
              <View style={styles.container_text}>
                <Text adjustsFontSizeToFit={true} style={styles.texte}>{"sac"}</Text>
              </View>
              <View style={styles.container_image}>
                <Image
                style={styles.image}
                source={require("../Images/bas.png")}
                />
              </View>
            </Pressable>
        </View>

        <View style={styles.container_sac}>
          <Sac/>
        </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1,
    backgroundColor : '#600080'
  },
  container_button : {
    flex : 1,
    flexDirection : 'row',
    backgroundColor : '#600080',
    margin : 10,
    borderRadius : 20
  },
  pressable_button : {
    flex : 2,
    backgroundColor : 'grey',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection : 'row',
    borderRadius : 6,
    padding : 20

  },
  container_sac : {
    flex : 3,

  },
  texte : {
    fontSize : 25
  },
  container_text : {
    flex : 1
  },
  container_image : {
    flex : 1
  },
  border : {
    flex : 1,
    backgroundColor : '#600080'
  }
})
export default Inventaire
