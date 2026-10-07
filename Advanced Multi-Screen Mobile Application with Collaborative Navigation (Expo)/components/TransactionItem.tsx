import { StyleSheet, Text, View } from "react-native";
import { Transaction } from "../types/banking";

type TransactionItemProps = {
  transaction: Transaction;
};

export default function TransactionItem({
  transaction,
}: TransactionItemProps) {
  const isIncome = transaction.type === "income";

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={styles.merchant}>
          {transaction.merchant}
        </Text>

        <Text style={styles.category}>
          {transaction.category}
        </Text>

        <Text style={styles.date}>
          {transaction.date}
        </Text>
      </View>

      <Text
        style={[
          styles.amount,
          isIncome ? styles.income : styles.expense,
        ]}
      >
        {isIncome ? "+" : "-"}$
        {Math.abs(transaction.amount).toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  left: {
    flex: 1,
  },

  merchant: {
    fontSize: 16,
    fontWeight: "600",
    color: "#222",
    marginBottom: 4,
  },

  category: {
    fontSize: 13,
    color: "#666",
    marginBottom: 3,
  },

  date: {
    fontSize: 12,
    color: "#999",
  },

  amount: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },

  income: {
    color: "#00843D",
  },

  expense: {
    color: "#C62828",
  },
});