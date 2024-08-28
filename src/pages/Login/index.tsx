import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./style";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "..";
import strings from "../../../assets/strings";
import colors from "../../../assets/colors";
import postLogin from "../../services/postLogin";

export type loginScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Login"
>;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<loginScreenProp>();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.textTitle}>{strings.login}</Text>
      </View>

      <View style={styles.containerForm}>
        <TextInput
          placeholderTextColor={colors.darkGray}
          style={styles.containerInput}
          placeholder={strings.email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          placeholderTextColor={colors.darkGray}
          style={styles.containerInput}
          placeholder={strings.password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          value={password}
        />
        <TouchableOpacity
          onPress={() => postLogin({ email, password, navigation })}
          style={styles.buttonLogin}
        >
          <Text style={styles.txtButton}>{strings.entrar}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
