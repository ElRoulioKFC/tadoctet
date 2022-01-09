import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text,StyleSheet,View,Pressable,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BaseConstruction from './Components/BaseConstruction.js';
import BaseRadar from './Components/BaseRadar.js';
import Aventure from './Components/Aventure.js';
import Inventaire from './Components/Inventaire.js';
import RejoindrePartie from './Components/RejoindrePartie.js'
import requester from './API/requester'

function HomeScreen({navigation}) {
  return (
    <View style={styles.main_container}>
      <View style={styles.container_partie}>
        <RejoindrePartie/>
      </View>
      <View style={styles.container_choix}>
        <View style={styles.caban_way}>
          <Pressable
            style={styles.Pressable_caban}
            onPress = {()=>{requester.joinPartie({}); navigation.navigate('Root')}}>
              <Text style={styles.Pressable_text}>Le confort</Text>
          </Pressable>
        </View>
        <View style={styles.exterior_way}>
          <Pressable
            style={styles.Pressable_exterior}
            onPress =  {()=>{requester.joinPartie({}); navigation.navigate('Aventurier')}}>
            <Text style={styles.Pressable_text}>L'aventure</Text>

          </Pressable>
        </View>
      </View>
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
  flex:1,
  backgroundColor : '#b3daff'
},
  caban_way:{
    flex:1,
    justifyContent : 'center',
  },
  exterior_way:{
    flex:1,
  },
  icon: {
    width: 30,
    height: 30
  },
  container_partie : {
    flex : 3
  },
  container_choix :{
    flex : 4,
    justifyContent : 'center',
    margin : 10,
    marginTop : 0
  },
  Pressable_caban : {
    backgroundColor: 'red',
    padding : 50,
    borderRadius : 25,
    margin : 25,
    marginLeft : 50,
    marginRight : 50,
    justifyContent : 'center',


  },
  Pressable_exterior : {
    backgroundColor: 'blue',
    padding : 50,
    borderRadius : 25,
    margin : 25,

    marginLeft : 50,
    marginRight : 50,

  },
  Pressable_text : {
    fontSize : 28,

  }
})
export default App;
