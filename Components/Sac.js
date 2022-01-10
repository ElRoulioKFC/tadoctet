import React from 'react'
import {Text,StyleSheet,View,FlatList} from 'react-native'

class Sac extends React.Component {
  constructor(props){
    super(props)
  }


  render(){
    return(
      <View style={styles.main_container}>
        <View style={styles.container_ext}>
          <View style={styles.container_int}>
          </View>
        </View>
      </View>
  )
  }
}

const styles = StyleSheet.create({
  main_container : {
    flex : 1
  },
  container_ext : {
    flex : 1,
    backgroundColor : '#0052cc',
    borderRadius : 7,
    margin : 7
  },
  container_int : {
    flex : 1,
    backgroundColor : '#9fbfdf',
    margin : 7,
    borderRadius : 10
  }
})
export default Sac
