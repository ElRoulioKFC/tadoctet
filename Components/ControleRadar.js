import React from 'react'
import {Text,StyleSheet,View,Pressable,Image} from 'react-native'

class ControleRadar extends React.Component {
  render(){
    return(
      <View style = {styles.main_container}>

      <View style={styles.row}>
        <Pressable style={styles.pressable} >
          <Image
            style={styles.image}
            source={require("../Images/perso.png")}
          />
        </Pressable>

        <Pressable style={styles.pressable} >
          <Image
            style={styles.image}
            source={require("../Images/haut.png")}
          />
        </Pressable>

        <Pressable style={styles.pressable} >
          <Image
            style={styles.image}
            source={require("../Images/plus.png")}
          />
        </Pressable>
      </View>

      <View style={styles.row}>
      <Pressable style={styles.pressable} >
        <Image
          style={styles.image}
          source={require("../Images/gauche.png")}
        />
      </Pressable>

      <Pressable style={styles.pressable} >
        <Image
          style={styles.image}
          source={require("../Images/perso.png")}
        />
      </Pressable>

      <Pressable style={styles.pressable} >
        <Image
          style={styles.image}
          source={require("../Images/droite.png")}
        />
      </Pressable>
      </View>

      <View style={styles.row}>
      <Pressable style={styles.pressable} >
        <Image
          style={styles.image}
          source={require("../Images/base.png")}
        />
      </Pressable>

      <Pressable style={styles.pressable} >
        <Image
          style={styles.image}
          source={require("../Images/bas.png")}
        />
      </Pressable>

      <Pressable style={styles.pressable} >
        <Image
          style={styles.image}
          source={require("../Images/moins.png")}
        />
      </Pressable>
      </View>

      </View>


    )
  }
}
  const styles = StyleSheet.create({
    main_container :{
      flex : 1
    },
    row :{
      flexDirection : 'row',
      flex : 1
    },
    image : {
      height : 30,
      width : 30

    },
    pressable : {
      flex : 1,
      alignItems: 'center',
      justifyContent: 'center',
    }
  })
export default ControleRadar
