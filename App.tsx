import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllExpenses from "./src/screens/AllExpenses";
import ManageExpenses from "./src/screens/ManageExpenses";
import RecentExpenses from "./src/screens/RecentExpenses";
import { GlobalStyles } from "./src/constants/styles";
import { AntDesign } from "@expo/vector-icons";
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const ExpenseOverview = () => {
  return (
    <Bottom.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: GlobalStyles.colors.subColor3,
        },
        headerTintColor: GlobalStyles.colors.blackColor,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.subColor3,
        },
        tabBarActiveTintColor: GlobalStyles.colors.blackColor,
      }}
    >
      <Bottom.Screen
        name="AllExpenses"
        component={AllExpenses}
        options={{
          headerTitle: "모든 비용",
          tabBarLabel: "전체",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="hourglass" size={size} color={color} />
          ),
        }}
      />
      <Bottom.Screen
        name="RecentExpenses"
        component={RecentExpenses}
        options={{
          headerTitle: "최근 비용",
          tabBarLabel: "최근",
        }}
      />
    </Bottom.Navigator>
  );
};

export default function App() {
  // * NavigationContainer은 앱 상태를 관리하고 앱 환경에 네비게이터를 연결한다
  // * headerShown 옵션으로 header를 숨길 수 있다. ( nested navigation을 사용하면 header가 두개 나오므로 상위 스크린 헤더를 안보이게 하기 위함 )
  return (
    <>
      <StatusBar style="auto" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="ManageExpenses" component={ManageExpenses} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
