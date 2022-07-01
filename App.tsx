import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "./src/screens/AllExpenses";
import ManageExpenses from "./src/screens/ManageExpenses";
import RecentExpenses from "./src/screens/RecentExpenses";

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

export default function App() {
  // * NavigationContainer은 앱 상태를 관리하고 앱 환경에 네비게이터를 연결한다
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="AllExpenses" component={AllExpenses} />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
          <Stack.Screen name="RecentExpenses" component={RecentExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
