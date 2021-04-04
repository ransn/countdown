import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import EventList from './EventList';
import EventForm from "./EventForm";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="EventList"
          component={EventList}
          options={{ title: 'Your Events' }}
        />
        <Stack.Screen
          name="EventForm"
          component={EventForm}
          options={{ title: 'Add an Event' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;

// const AppNavigator = createStackNavigator({
//   list: { screen: EventList }
// });

// export default createAppContainer(AppNavigator);


