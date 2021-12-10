import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Image} from 'react-native'

class Batiment extends React.Component {
  constructor(props) {
    super(props)
    this._sourceImage = require("../Images/base.png")
  }
  render(){
    return(
    <View style={styles.main_container}>
    <Image
      style={styles.image}
      source={this._sourceImage}
    />
    <Text>Base</Text>
    <Text>lvl. 0</Text>
    </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container :{
    flexDirection:'row',
    backgroundColor: 'gray',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  image : {
    height: 50,
    width : 50
  }
})
export default Batiment
