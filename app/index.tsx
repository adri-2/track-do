import { Card } from "@/components/Card";
import { ThemedText } from "@/components/ThemedText";
import { Raduis } from "@/constants/Radius";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const colors = useThemeColors();

  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
    >
      {/* Logo */}
      <ThemedText variant="display" color="primary" style={styles.logo}>
        <ThemedText variant="display" color="text">
          Track
        </ThemedText>
        Do
      </ThemedText>

      {/* Budget */}
      <Card
        style={[
          styles.budget,
          {
            backgroundColor: colors.primary,
          },
        ]}
      >
        <ThemedText variant="body" color="surface">
          Budget Mensuel
        </ThemedText>

        <ThemedText variant="display" color="surface">
          15 000{" "}
          <ThemedText variant="label" color="surface">
            FCFA
          </ThemedText>
        </ThemedText>

        <View style={styles.row}>
          <ThemedText variant="body" color="surface">
            Dépensé : 54 000 FCFA
          </ThemedText>

          <ThemedText variant="body" color="surface">
            Reste : 96 000 FCFA
          </ThemedText>
        </View>
      </Card>

      <View style={styles.sectionHeader}>
        <ThemedText variant="body">Aujourd'hui</ThemedText>

        <ThemedText variant="body" color="primary">
          Voir tout
        </ThemedText>
      </View>

      <Card
        style={[
          styles.expenseList,
          {
            borderColor: colors.border,
          },
        ]}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  logo: {
    paddingHorizontal: 10,
    marginTop: 10,
  },

  budget: {
    height: 150,
    marginHorizontal: 10,
    marginVertical: 20,
    padding: 16,
    justifyContent: "space-around",
    borderRadius: Raduis.sm,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
    marginBottom: 10,
  },

  expenseList: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderRadius: Raduis.md,
  },
});
