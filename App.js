import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,StyleSheet,View,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BaseConstruction from './Components/BaseConstruction.js';

function HomeScreen({navigation}) {
  return (
    <View style={styles.main_container}>
    <TouchableOpacity
    style={styles.caban_way}
    onPress = {()=>navigation.navigate('BaseConstruction')}>
    <Text>base construction</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={styles.exterior_way}
    onPress = {()=>console.log('test')}>
    </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="BaseConstruction" component={BaseConstruction} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  main_container: {
  flexDirection: 'row',
  flex:1
},
  caban_way:{
    backgroundColor: 'red',
    flex:1
  },
  exterior_way:{
    backgroundColor: 'blue',
    flex:1
  }
})
export default App;
