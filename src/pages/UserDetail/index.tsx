import { Text, SafeAreaView, Image } from "react-native";
import React from "react";

import styles from "./style";

function UserDetail({ route }: any) {
  const { id, first_name, last_name, avatar, email } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.avatar}
        source={{ uri: avatar }}
        width={200}
        height={200}
      />

      <Text style={styles.textName}>{`${first_name} ${last_name}`}</Text>
      <Text>{email}</Text>
    </SafeAreaView>
  );
}
export default UserDetail;
