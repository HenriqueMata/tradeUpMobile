import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 8,
    padding: 12,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  avatar: {
    borderRadius: 50,
  },
  containerContent: { marginLeft: 16, justifyContent: "center" },
  textName: { fontWeight: "bold", fontSize: 18 },
});

export default styles;
