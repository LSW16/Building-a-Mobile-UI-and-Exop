import { StyleSheet, Text, View } from "react-native";

type SectionHeaderProps = {
  title: string;
};

export default function SectionHeader({
  title,
}: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginBottom: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
  },
});