import api from ".";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { loginScreenProp } from "../pages/Login";

interface LoginRequestProps {
  email: string;
  password: string;
  navigation: loginScreenProp;
}

const postLogin = ({ email, password, navigation }: LoginRequestProps) => {
  api
    .post("/login", { email, password })
    .then(async ({ data, status }) => {
      if (status === 200) {
        try {
          await AsyncStorage.setItem("token", data.token);
          navigation.navigate("Users");
        } catch (error) {
          console.log(error);
        }
      }
    })
    .catch((error) => console.log(error));
};

export default postLogin;
