import { Input } from "@/components/Input";
import { ThemedText } from "@/components/ThemedText";
import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Button } from "@/components/Button";
import DateInput from "@/components/DateInput";
import { useThemeColors } from "@/hooks/useThemeColors";
import { saveBudget } from "@/services/storage/budget.storage";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Budget() {
  const colors = useThemeColors();
  const [amount, setAmount] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  async function handleCreateBudget() {
    await saveBudget({
      id: Date.now().toString(),
      amount: Number(amount),
      dateStart: startDate.toISOString(),
      dateEnd: endDate.toISOString(),
      createdAt: new Date().toISOString(),
    });

    router.replace("/home");
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            router.replace("/(tabs)/home");
          }}
        >
          <Ionicons name="arrow-back" color={colors.text} size={24} />
        </Pressable>
        <ThemedText variant="title">Nouveau Budget</ThemedText>
      </View>

      <View style={styles.content}>
        <Input
          label="Montant du budget"
          suffix="FCFA"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />

        <View>
          <ThemedText>Date debut</ThemedText>
          <DateInput value={startDate} onChange={setStartDate} />
        </View>

        <View>
          <ThemedText>Date fin</ThemedText>
          <DateInput value={endDate} onChange={setEndDate} />
        </View>
      </View>

      <View style={styles.bottomBar}>
        <Button title="Creer le budget" onPress={handleCreateBudget} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingTop: 15,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 10,
    padding: 2,
  },

  content: {
    flex: 1,
    marginTop: 40,
    rowGap: 20,
  },

  bottomBar: {
    paddingVertical: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
  },
});
