import { Button } from "@/components/Button";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColors } from "@/hooks/useThemeColors";
import { router } from "expo-router";
import React from "react";
import { Image, ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Onboarding() {
  const colors = useThemeColors();
  return (
    <SafeAreaView
      style={[styles, { flex: 1, backgroundColor: colors.background }]}
    >
      <Image
        source={require("@/assets/images/unnamed.png")}
        style={{
          width: 134,
          height: 134,
          marginBottom: 10,
        }}
      />
      <ThemedText variant="display" color="primary">
        TrackDo
      </ThemedText>
      <ThemedText variant="body" color="text">
        suivez, Analyser, Economisez
      </ThemedText>
      <Button
        title="Créer le budget"
        onPress={() => {
          router.replace("/(tabs)/home");
        }}
      />
    </SafeAreaView>
  );
}

const styles = {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  rowGap: 8,
} satisfies ViewStyle;
