import { StatusBar } from 'expo-status-bar';
import { Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { WeatherData } from './WeatherData';

const Stack = createNativeStackNavigator();

function PrincessScreen() {
  return (
    <View style={styles.princess_container}>
      <StatusBar style="auto" />
      <ScrollView>
        <Text style={[{verticalAlign: 'top'}, styles.header]}>Welcome to Princess' World!</Text>
        <View style={{display: 'inline-block', verticalAlign: 'middle'}}>
          <WeatherData cityID={'1701668'}/>
          <WeatherData cityID={'4221552'}/>
          <WeatherData cityID={'4180439'}/>
          <WeatherData cityID={'5809844'}/>
        </View>
      </ScrollView>
    </View>
  )
}

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/universe-background.jpeg')} 
        style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width}}
        imageStyle={{opacity: 0.8}} />
      <View style={[{position: 'absolute'}, styles.container]}>
        <StatusBar style="auto" />
        <Text style={[{color: 'white'}, styles.header]}>Welcome to Our Universe!</Text>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate('Princess')}>
            <Text>Princess' World</Text>
        </Pressable>
      </View>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Princess' component={PrincessScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'top',
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    verticalAlign: 'top',
    margin: 25,
    padding: 20
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    margin: 20,
    borderRadius: 5,
    backgroundColor: '#a4e1ff'
  },

  princess_container: {
    backgroundColor: '#a4e1ff',
    alignItems: 'center',
    justifyContent: 'top',
  },
});

export default App;
