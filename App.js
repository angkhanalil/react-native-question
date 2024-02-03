import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Question from './src/components/Question';
import Profile from './src/components/Profile';
import EachPage from './src/components/EachPage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
    {/* Rest of your app code */}
    <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Question}
          // options={{title: 'Welcome'}}
        />
        {/* <Stack.Screen name="Profile" component={Question} /> */}
        <Stack.Screen name="EachPage" component={EachPage} options={{title: 'Question'}}/>
      </Stack.Navigator>
    {/* <View style={styles.container}>
      <Text>Hello World!!</Text>
      <StatusBar style="auto" />
    </View> */}
  </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
