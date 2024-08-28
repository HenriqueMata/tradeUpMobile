import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import Login from "./Login";
import Users, { UserProps } from "./Users";
import UserDetail from "./UserDetail";

export type RootStackParamList = {
  Login: undefined;
  Users: undefined;
  UserDetail: UserProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Users" component={Users} />
      <Stack.Screen name="UserDetail" component={UserDetail} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
