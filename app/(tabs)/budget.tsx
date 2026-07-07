import { ThemedText } from "@/components/ThemedText";
import { Budget } from "@/models";
import { listBudget } from "@/services/storage/budget.storage";
import { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function BudgetScreen() {
  const [budgets, setBudgets] = useState<Budget[]>([]);
  useEffect(() => {
    async function loadBudget() {
      const data = await listBudget();

      setBudgets(data);
    }
    loadBudget();
  }, []);
  return (
    <SafeAreaView style={styles.section}>
      <View style={styles.header}>
        <ThemedText variant="title">Budget</ThemedText>
      </View>
      <FlatList
        data={[...budgets].reverse()}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.left}>
              <View>
                <ThemedText>{item.dateEnd} </ThemedText>
                <ThemedText>{item.dateStart} </ThemedText>
              </View>
              <ThemedText>{item.amount} FCFA</ThemedText>
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
  amount: {
    fontSize: 14,
    fontWeight: "600",
  },
});
