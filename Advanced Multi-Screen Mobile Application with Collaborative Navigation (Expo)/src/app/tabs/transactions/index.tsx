import {
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import AccountCard from "../../../../components/AccountCard";
import SectionHeader from "../../../../components/SectionHeader";
import TransactionItem from "../../../../components/TransactionItem";

import { Account, Transaction } from "../../../../types/banking";

const account: Account = {
  id: "1",
  name: "Every Day Chequing",
  type: "Chequing Account",
  balance: 2450.75,
};

const transactions: Transaction[] = [
  {
    id: "1",
    merchant: "Save-On-Foods",
    category: "Groceries",
    amount: 68.42,
    date: "October 6, 2026",
    type: "expense",
  },
  {
    id: "2",
    merchant: "Netflix",
    category: "Entertainment",
    amount: 16.99,
    date: "October 5, 2026",
    type: "expense",
  },
  {
    id: "3",
    merchant: "Tim Hortons",
    category: "Food",
    amount: 8.75,
    date: "October 4, 2026",
    type: "expense",
  },
  {
    id: "4",
    merchant: "Payroll Deposit",
    category: "Income",
    amount: 1850.0,
    date: "October 1, 2026",
    type: "income",
  },
];

export default function TransactionsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Transactions</Text>

        <Text style={styles.subtitle}>
          Your recent banking activity
        </Text>

        <SectionHeader title="Account" />

        <AccountCard account={account} />

        <SectionHeader title="Recent Transactions" />

        <View style={styles.transactionList}>
          {transactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },

  content: {
    padding: 20,
    paddingTop: 60,
    paddingBottom: 40,
  },

  title: {
    fontSize: 30,
    fontWeight: "700",
    color: "#222",
    marginBottom: 6,
  },

  subtitle: {
    fontSize: 15,
    color: "#666",
    marginBottom: 25,
  },

  transactionList: {
    marginTop: 5,
  },
});