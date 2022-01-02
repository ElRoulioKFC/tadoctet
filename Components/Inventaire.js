import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Pressable,Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Sac from './Sac.js'
class Inventaire extends React.Component {
  render(){
    return(
      <View style={styles.main_container}>
        <View style={styles.container}>
          <View style={styles.inner_container}>
            <View style={styles.container_title}>
              <Text style={styles.text_title}>EQUIPEMENT</Text>
            </View>
            <View style={styles.container_cont}>
              <View style={styles.container_body}>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>CASQUE</Text>
                    <Text style={styles.text}>casque en cuir</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>armure</Text>
                    <Text style={styles.text}>armure en cuir</Text>
                  </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>sac</Text>
                    <Text style={styles.text}>sac en cuir</Text>
                </View>
              </View>
              <View style={styles.container_weapon}>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>Arme CaC</Text>
                    <Text style={styles.text}>épée en bois</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>Arme à distance</Text>
                    <Text style={styles.text}>pistolet</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>Soins</Text>
                    <Text style={styles.text}>kit de fortune</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.inner_container}>
            <View style={styles.container_title}>
              <Text style={styles.text_title}>STATS</Text>
            </View>
            <View style={styles.container_cont}>
              <View style={styles.container_weapon}>

                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>Dégâts</Text>
                    <Text style={styles.text}>14</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>PVmax</Text>
                    <Text style={styles.text}>70</Text>
                </View>
              </View>
              <View style={styles.container_weapon}>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>fuite</Text>
                    <Text style={styles.text}>37</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>esquive</Text>
                    <Text style={styles.text}>32</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>Touche</Text>
                    <Text style={styles.text}>48</Text>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.inner_container}>
            <View style={styles.container_title}>
              <Text style={styles.text_title}>SAC</Text>
            </View>
            <View style={styles.container_cont}>
              <View style={styles.container_weapon}>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>Place</Text>
                    <Text style={styles.text}>24/60</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>Alcool</Text>
                    <Text style={styles.text}>14</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>Ferraille</Text>
                    <Text style={styles.text}>70</Text>
                </View>
              </View>
              <View style={styles.container_weapon}>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>bois</Text>
                    <Text style={styles.text}>37</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>médicament</Text>
                    <Text style={styles.text}>32</Text>
                </View>
                <View style={styles.container_text}>
                    <Text style={styles.text_sub_title}>textile</Text>
                    <Text style={styles.text}>48</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1,
    backgroundColor : 'black'
  },
  text_title : {
    fontSize : 30,
    color : 'white',
    fontWeight : 'bold',
    textTransform: 'uppercase',
  },
  container : {
    flex : 1,
    backgroundColor : 'white',
    margin : 7.5

  },
  inner_container : {
    flex : 1,
    backgroundColor : 'black',
    margin : 2.5
  },
  container_title : {
    flex : 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_cont: {
    flex : 7,
    flexDirection : 'row',
  },
  text : {
    fontSize : 18,
    color : 'white',
    fontWeight : 'bold',
  },
  text_sub_title : {
    fontSize : 15,
    color : 'white',
    fontWeight : 'bold',
    textTransform: 'uppercase',
  },
  container_body : {
    flex : 1,
    margin : 6,
  },
  container_weapon : {
    flex : 1,
  },
  container_text : {
    flex : 1,
    margin : 6,
  }
})
export default Inventaire
