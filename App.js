import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,StyleSheet,View,TouchableOpacity,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BaseConstruction from './Components/BaseConstruction.js';
import BaseRadar from './Components/BaseRadar.js';
import Aventure from './Components/Aventure.js';
import Inventaire from './Components/Inventaire.js';

function HomeScreen({navigation}) {
  return (
    <View style={styles.main_container}>
      <TouchableOpacity
        style={styles.caban_way}
        onPress = {()=>navigation.navigate('Root')}>
          <Text>base construction</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.exterior_way}
        onPress =  {()=>navigation.navigate('Aventurier')}>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Root() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="construction" component={BaseConstruction} options = {{
        tabBarIcon: () => {
          return <Image
            source={require('./Images/construction.png')}
            style={styles.icon}/>
        }}} />

      <Tab.Screen name="radar" component={BaseRadar} options = {{
        tabBarIcon: () => {
          return <Image
            source={require('./Images/radar.png')}
            style={styles.icon}/>
        }}} />
    </Tab.Navigator>
  );
}

function Aventurier() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="inventaire" component={Inventaire} options = {{
        tabBarIcon: () => {
          return <Image
            source={require('./Images/sac.png')}
            style={styles.icon}/>
        }}} />

      <Tab.Screen name="aventure" component={Aventure} options = {{
        tabBarIcon: () => {
          return <Image
            source={require('./Images/monde.png')}
            style={styles.icon}/>
        }}} />
    </Tab.Navigator>
  );
}

function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="home" component={HomeScreen} />
        <Stack.Screen name="Root" component={Root} options={{ headerShown: false }}/>
        <Stack.Screen name="Aventurier" component={Aventurier} options={{ headerShown: false }}/>
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
  },
  icon: {
    width: 30,
    height: 30
  }
})
export default App;
