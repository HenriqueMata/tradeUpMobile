import { useState, useEffect } from "react";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./Login";
import Users, { UserProps } from "./Users";
import UserDetail from "./UserDetail";
import strings from "../../assets/strings";
import LogoutButton from "../components/LogoutButton";

export type RootStackParamList = {
  Login: undefined;
  Users: undefined;
  UserDetail: UserProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

function RootNavigator() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogoutButton = async (navigation: NavigationProps) => {
    setLoggedIn(false);
    await AsyncStorage.removeItem("token");

    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    });
  };

  const checkIfLoggedInTokenSaved = async () => {
    const value = await AsyncStorage.getItem("token");

    if (value !== null) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    checkIfLoggedInTokenSaved();
  }, []);

  return (
    <>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerTitleAlign: "center",
          headerRight: () => (
            <LogoutButton onPress={() => handleLogoutButton(navigation)} />
          ),
        })}
      >
        {!loggedIn && (
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
          />
        )}

        <Stack.Screen
          name="Users"
          component={Users}
          options={{
            headerTitle: strings.users,
            headerBackVisible: false,
          }}
        />
        <Stack.Screen
          name="UserDetail"
          component={UserDetail}
          options={{ headerTitle: strings.details }}
        />
      </Stack.Navigator>
    </>
  );
}

export default RootNavigator;
