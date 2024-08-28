import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 12,
  },
  textTitle: {
    fontSize: 36,
    fontWeight: "bold",
    marginVertical: 24,
  },
  avatar: {
    borderRadius: 100,
    marginVertical: 24,
  },
  textName: {
    fontSize: 30,
    fontWeight: "ultralight",
    color: colors.primaryColor,
  },
});

export default styles;
