import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import React from "react";
import { UserProps } from "../../pages/Users";
import styles from "./style";

type CardUserProps = UserProps & { onPressItem: () => void };
const CardUser: React.FC<CardUserProps> = ({
  avatar,
  first_name,
  last_name,
  email,
  onPressItem,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressItem}>
      <View style={styles.container}>
        <Image
          source={{ uri: avatar }}
          width={100}
          height={100}
          style={styles.avatar}
        />
        <View style={styles.containerContent}>
          <Text style={styles.textName}>
            <Text>{first_name} </Text>
            <Text>{last_name}</Text>
          </Text>
          <Text>{email}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CardUser;
