import { ThemedText } from "@/components/ThemedText";
import { Expense } from "@/models";
import { getExpenses } from "@/services/storage/expense.storage";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
type Props = {
  title: string;
  total: number;
  data: Expense[];
};

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    async function loadExpense() {
      const data = await getExpenses();
      setExpenses(data);
    }
    loadExpense();
  }, []);

  const total = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <SafeAreaView style={styles.section}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <ThemedText variant="title">Depenses</ThemedText>
        </View>
      </View>

      {/* Contenu */}
      <View style={styles.header}>
        <Text style={styles.title}>Total</Text>
        <Text style={styles.total}>{total.toLocaleString()} FCFA</Text>
      </View>

      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.left}>
              <View style={styles.iconBox} />
              <View>
                <ThemedText>{item.categoryId} </ThemedText>
                <ThemedText>{item.date} </ThemedText>
              </View>
              <Text style={styles.amount}>
                {item.amount.toLocaleString()} FCFA
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  section: {
    marginBottom: 20,
    padding: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  total: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111",
  },

  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignItems: "center",
    elevation: 2,
  },

  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  iconBox: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#f3f4f6",
    justifyContent: "center",
    alignItems: "center",
  },

  name: {
    fontSize: 15,
    fontWeight: "500",
  },

  time: {
    fontSize: 12,
    color: "gray",
  },

  amount: {
    fontSize: 14,
    fontWeight: "600",
  },
});
