import React from "react";
import { View, TouchableWithoutFeedback } from "react-native";
import { MaterialIcons as Icon } from "@expo/vector-icons";

interface LogoutButtonProps {
  onPress: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ onPress }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <Icon name="logout" size={22} />
    </TouchableWithoutFeedback>
  );
};
export default LogoutButton;
