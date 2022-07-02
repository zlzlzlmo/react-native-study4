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
import IconButton from "./src/components/ui/IconButton";

export type RootStackParamList = {
  ManageExpenses: {
    expenseId: string;
  };
};

export type RootBottomParamList = {
  AllExpenses: undefined;
  RecentExpenses: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Bottom = createBottomTabNavigator<RootBottomParamList>();

// * useNavagation에는 StackNavigationProps<RootStackParamLst>
// * screen에는 StackScreenProps<RootStackParamList,"name">

// * Navigator에 screenOptions 를 사용하여 자식 스크린들에 공통 스타일링을 적용 할 수 있다
// * headerStyle, tabBarStyle를 통해 헤더와 하단 탭바 스타일 적용 가능
// * tintColor는 text color

// ! screenOptions 에 객체를 바로 넣는것이 아니라 함수를 넣으면 파라미터에 navigation param을 받을 수 있다. -> 이것으로 state를 받던가 navigate기능을 하던가 할 수 있다.
const ExpenseOverview = () => {
  return (
    <Bottom.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: {
          backgroundColor: GlobalStyles.colors.subColor3,
        },
        headerTintColor: GlobalStyles.colors.blackColor,
        tabBarStyle: {
          backgroundColor: GlobalStyles.colors.subColor3,
        },
        tabBarActiveTintColor: GlobalStyles.colors.blackColor,
        tabBarInactiveTintColor: GlobalStyles.colors.whiteColor,
        headerRight: ({ tintColor }) => {
          return (
            <IconButton
              icon="plus"
              size={20}
              color={tintColor || GlobalStyles.colors.whiteColor}
              onPress={() => {
                navigation.navigate("ManageExpenses");
              }}
            />
          );
        },
      })}
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
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: GlobalStyles.colors.subColor3,
            },
            headerTintColor: GlobalStyles.colors.blackColor,
          }}
        >
          <Stack.Screen
            name="ExpenseOverview"
            component={ExpenseOverview}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="ManageExpenses"
            component={ManageExpenses}
            options={{
              headerTitle: "비용 관리",
              headerBackTitleVisible: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
