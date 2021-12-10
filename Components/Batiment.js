import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Image} from 'react-native'

class Batiment extends React.Component {
  render(){
    return(
    <View style={styles.main_container}>
    <Image
      style={styles.image}
      source={"../Images/base.png"}
    />
    <Text></Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container :{
    backgroundColor: 'gray',
    height: 300
  },
  image : {
    width : 25
  }
})
export default Batiment
