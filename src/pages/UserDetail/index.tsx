import { View, Text, SafeAreaView } from "react-native";
import React from "react";

function UserDetail({ route }: any) {
  const { id, first_name, last_name, avatar, email } = route.params;

  return (
    <SafeAreaView>
      <Text>{first_name}</Text>
    </SafeAreaView>
  );
}
export default UserDetail;
