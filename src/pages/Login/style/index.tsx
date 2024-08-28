import { StyleSheet } from "react-native";
import colors from "../../../../assets/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerTitle: { flex: 0.4, alignItems: "center", justifyContent: "center" },
  containerForm: { flex: 0.6, alignItems: "center" },
  containerInput: {
    padding: 16,
    width: "80%",
    height: 58,
    backgroundColor: colors.gray,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    marginVertical: 8,
  },

  textTitle: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 24,
  },
  buttonLogin: {
    width: "70%",
    height: 58,
    backgroundColor: colors.primaryColor,
    marginTop: 12,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  txtButton: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
