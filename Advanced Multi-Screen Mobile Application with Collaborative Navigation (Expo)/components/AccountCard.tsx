import { StyleSheet, Text, View } from "react-native";
import { Account } from "../types/banking";

type AccountCardProps = {
  account: Account;
};

export default function AccountCard({
  account,
}: AccountCardProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{account.name}</Text>

      <Text style={styles.type}>{account.type}</Text>

      <Text style={styles.label}>
        Available Balance
      </Text>

      <Text style={styles.balance}>
        $
        {account.balance.toLocaleString("en-CA", {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#00843D",
    borderRadius: 16,
    padding: 20,
    marginBottom: 25,
  },

  name: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "700",
  },

  type: {
    color: "#E8F5E9",
    fontSize: 14,
    marginTop: 4,
  },

  label: {
    color: "#E8F5E9",
    fontSize: 13,
    marginTop: 25,
  },

  balance: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginTop: 5,
  },
});