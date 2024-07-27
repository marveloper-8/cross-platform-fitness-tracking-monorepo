import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack"
import HomeScreen from "../screens/HomeScreen";
import ActivityScreen from "../screens/ActivityScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Activities" component={ActivityScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator