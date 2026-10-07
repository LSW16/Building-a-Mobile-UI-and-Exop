import {
    StyleSheet,
    Text,
    View,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

export default function TransactionDetailsScreen() {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Transaction Details
      </Text>

      <View style={styles.card}>
        <Text style={styles.label}>
          Transaction ID
        </Text>

        <Text style={styles.value}>
          {id}
        </Text>

        <Text style={styles.label}>
          Status
        </Text>

        <Text style={styles.value}>
          Completed
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
    paddingTop: 60,
  },

  title: {
    fontSize: 28,
    fontWeight: "700",
    color: "#222",
    marginBottom: 25,
  },

  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 16,
    padding: 20,
  },

  label: {
    fontSize: 13,
    color: "#777",
    marginTop: 10,
    marginBottom: 5,
  },

  value: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },
});