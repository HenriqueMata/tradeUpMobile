import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";
const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  loading: { position: "absolute", top: 0, bottom: 0, right: 0, left: 0 },
  separator: { marginTop: 16, backgroundColor: colors.white },
  textTitle: {
    fontSize: 36,
    fontWeight: "bold",
    alignSelf: "center",
    marginVertical: 12,
  },
});

export default styles;
