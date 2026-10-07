import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="tabs"
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="tabs/transactions/[id]"
        options={{
          title: "Transaction Details",
          headerBackTitle: "Back",
        }}
      />
    </Stack>
  );
}