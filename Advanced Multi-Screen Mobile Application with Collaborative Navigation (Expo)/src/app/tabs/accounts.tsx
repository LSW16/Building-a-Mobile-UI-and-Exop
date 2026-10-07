import { ScrollView, StyleSheet, Text, View } from "react-native";

import AccountCard from "../../../components/AccountCard";
import SectionHeader from "../../../components/SectionHeader";

import { Account } from "../../../types/banking";

const accounts: Account[] = [
  {
    id: "1",
    name: "Every Day Chequing",
    type: "Chequing Account",
    balance: 2450.75,
  },
  {
    id: "2",
    name: "High Interest Savings",
    type: "Savings Account",
    balance: 5820.4,
  },
];

export default function AccountsScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Accounts</Text>

        <Text style={styles.subtitle}>
          Your TD accounts
        </Text>

        <SectionHeader title="My Accounts" />

        {accounts.map((account) => (
          <AccountCard
            key={account.id}
            account={account}
          />
        ))}
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
});