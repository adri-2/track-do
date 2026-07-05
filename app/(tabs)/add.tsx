import { Button } from "@/components/Button";
import DateInput from "@/components/DateInput";
import InputArear, { Input } from "@/components/Input";
import { ThemedText } from "@/components/ThemedText";
import { DEFAULT_CATEGORIES } from "@/data/defaultCategories";
import { useThemeColors } from "@/hooks/useThemeColors";
import { saveExpense } from "@/services/storage/expense.storage";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AddScreen() {
  const colors = useThemeColors();
  const categories = DEFAULT_CATEGORIES;
  const [formData, setFormData] = useState({
    amount: "",
    categoryId: "transport",
    date: new Date(),
    description: "",
    budgetId: "",
  });
  async function handleCreateExpense() {
    await saveExpense({
      id: Date.now().toString(),

      amount: Number(formData.amount),
      categoryId: "transport",
      date: new Date().toISOString(),
      description: formData.description,
      budgetId: "1",
    });
    router.replace("/(tabs)/expenses");
  }
  const updateField = <k extends keyof typeof formData>(
    field: k,
    value: (typeof formData)[k],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => {
            router.replace("/(tabs)/home");
          }}
        >
          <Ionicons name="arrow-back" color={colors.text} size={24} />
        </Pressable>
      </View>

      {/* Contenu */}
      <View style={styles.content}>
        <Input
          label="Montant"
          suffix="FCFA"
          keyboardType="numeric"
          value={formData.amount}
          onChangeText={(text) => {
            updateField("amount", text);
          }}
        />

        <View>
          <ThemedText>Categorie</ThemedText>
          <Picker
            selectedValue={formData.categoryId}
            onValueChange={(text) => {
              const category = categories.find((c) => c.id === text);
              updateField("categoryId", text);

              updateField("description", category?.description ?? "");
            }}
          >
            {categories.map((c) => (
              <Picker.Item key={c.id} label={c.name} value={c.id} />
            ))}
          </Picker>
        </View>
        <InputArear
          label="Description"
          value={formData.description}
          onChangeText={(text) => updateField("description", text)}
        />
        <View>
          <ThemedText>Date</ThemedText>
          <DateInput
            value={formData.date}
            onChange={(date) => updateField("date", date)}
          />
        </View>
      </View>

      {/* Barre du bas */}
      <View style={styles.bottomBar}>
        <Button title="Enregistrer" onPress={handleCreateExpense} />
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
