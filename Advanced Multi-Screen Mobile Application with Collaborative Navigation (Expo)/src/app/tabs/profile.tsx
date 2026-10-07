import { StyleSheet, Text, View } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>S</Text>
      </View>

      <Text style={styles.name}>Seungwon</Text>

      <Text style={styles.email}>
        seungwon@example.com
      </Text>

      <View style={styles.card}>
        <Text style={styles.option}>
          Personal Information
        </Text>

        <Text style={styles.option}>
          Security Settings
        </Text>

        <Text style={styles.option}>
          Notifications
        </Text>

        <Text style={styles.option}>
          Help & Support
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F7",
    alignItems: "center",
    padding: 20,
    paddingTop: 70,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "#00843D",
    justifyContent: "center",
    alignItems: "center",
  },

  avatarText: {
    color: "white",
    fontSize: 36,
    fontWeight: "700",
  },

  name: {
    fontSize: 26,
    fontWeight: "700",
    marginTop: 15,
  },

  email: {
    color: "#777",
    marginTop: 5,
  },

  card: {
    width: "100%",
    backgroundColor: "white",
    borderRadius: 15,
    marginTop: 30,
    padding: 20,
  },

  option: {
    fontSize: 16,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: "#EEE",
  },
});