import React from "react";
import Home from "./screens/Home";
import List from "./screens/List";
import { Provider } from "react-redux";
import Store from "./store/configureStore";
import { View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default () => {
  return (
    <Provider store={Store}>
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              options={{ headerShown: false }}
              name="Home"
              component={Home}
            />
            <Stack.Screen
              options={{ headerShown: false }}
              name="List"
              component={List}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </Provider>
  );
};
