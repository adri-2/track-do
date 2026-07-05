import { router } from "expo-router";
import { useEffect } from "react";
import { ActivityIndicator, View } from "react-native";

import { getBudget } from "@/services/storage/budget.storage";

export default function Index() {
  useEffect(() => {
    checkBudget();
  }, []);

  async function checkBudget() {
    const budget = await getBudget();

    if (budget) {
      router.replace("/(tabs)/home");
    } else {
      router.replace("/onboarding");
    }
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ActivityIndicator size="large" />
    </View>
  );
}
