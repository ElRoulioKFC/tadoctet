import React from 'react'
import {Text,StyleSheet,View,TouchableOpacity,Pressable} from 'react-native'
import requester from '../API/requester'


class BoutonAction extends React.Component {
  constructor(props){
    super(props)
  }



  asynch _press(text){
    await requester.respsonseEvent(text)
    () => {
      res = requester.getStats
      const action = {type: "updateMaterialPlayer", value: {ferrailleJoueur : res.feraille}}
      this.props.dispatch(action)
    }
  }
  render(){
    return(
      <View style={styles.main_container}>
        <Pressable onPress={this._press(this.props.texte)} style={styles.pressable}>
          <View style={styles.container_text}>
            <Text adjustsFontSizeToFit={true} style={styles.texte}>{this.props.texte}</Text>
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
    flex : 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor : 'black',
  },
  texte : {
    fontSize : 40,
    color : 'white',
    fontWeight : 'bold',
    textTransform: 'uppercase',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',

  },
  container_text : {
    textAlign : 'center',
    textAlignVertical: 'center',
    paddingTop : 2,
  },
  container : {
    flex : 1
  }
})
export default BoutonAction
