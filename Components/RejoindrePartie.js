import React from 'react'
import {Text,StyleSheet,View,TextInput,TouchableWithoutFeedback,Keyboard} from 'react-native'

class RejoindrePartie extends React.Component {
  constructor(props){
    super(props)
    this.text = ''
  }
  _searchTextInputChanged(text) {
    this.text = text
  }
  render(){
    return(
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.main_container}>
          <View style={styles.title}>
            <Text style={styles.titleText}>Rejoins une partie et lance toi dans l'aventure ! </Text>
          </View>
          <View style={styles.container_text}>
          <TextInput
              style = {styles.text}
              onChangeText={(text) => this._searchTextInputChanged(text)}
              placeholder="Numéro de partie"
              />
            </View>
        </View>
      </TouchableWithoutFeedback>

  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1
  },
  text :{
    flex : 1,
    margin : 25,
    fontSize : 25

  },
  title : {
    flex : 6,
    color : 'black',
    backgroundColor: '#e6e6ff',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 15,
    margin : 25,
    padding : 25
  },
  titleText : {
    flex : 1,
    fontSize : 33,
    fontWeight : 'bold'
  },
  container_text : {
    flex : 4,
    borderRadius : 12,
    backgroundColor: '#e6e6ff',
    justifyContent : 'center',
    alignItems : 'center',
    borderRadius : 15,
    margin : 10,
    marginLeft : 50,
    marginRight : 50

  }

})
export default RejoindrePartie
