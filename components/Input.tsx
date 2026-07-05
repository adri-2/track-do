import { Raduis } from "@/constants/Radius";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = TextInputProps & {
  label?: string;
  error?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
};

export function Input({
  label,
  error,
  suffix,
  style,
  keyboardType = "default",
  ...rest
}: Props) {
  const colors = useThemeColors();
  return (
    <View
      style={[
        styles.inputContainer,
        {
          borderColor: colors.border,
          backgroundColor: colors.surface,
        },
      ]}
    >
      <ThemedText>{label}</ThemedText>
      <TextInput
        {...rest}
        keyboardType={keyboardType}
        style={[
          styles.input,
          {
            color: colors.text,
          },
          style,
        ]}
        placeholderTextColor={colors.textSecondary}
        // multiline={true}
        // numberOfLines={5}
      />

      {suffix && (
        <View
          style={[styles.suffixContainer, { borderLeftColor: colors.border }]}
        >
          <ThemedText variant="body" color="textSecondary">
            {suffix}
          </ThemedText>
        </View>
      )}
    </View>
  );
}

// export function InputArear

export default function InputArear({
  label,
  error,
  suffix,
  style,
  keyboardType = "default",
  ...rest
}: Props) {
  const colors = useThemeColors();
  return (
    <View
      style={[
        styles.inputContainer,
        {
          borderColor: colors.border,
          backgroundColor: colors.surface,
        },
      ]}
    >
      <ThemedText>{label}</ThemedText>
      <TextInput
        {...rest}
        keyboardType={keyboardType}
        style={[
          styles.input,
          {
            color: colors.text,
            height: 80,
            alignSelf: "flex-start",
          },
          style,
        ]}
        placeholderTextColor={colors.textSecondary}
        multiline={true}
        numberOfLines={5}
      />

      {suffix && (
        <View
          style={[styles.suffixContainer, { borderLeftColor: colors.border }]}
        >
          <ThemedText variant="body" color="textSecondary">
            {suffix}
          </ThemedText>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 6,
  },

  label: {
    marginLeft: 2,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: Raduis.md,
    overflow: "hidden",
    padding: 3,
  },

  input: {
    flex: 1,
    height: 52,
    paddingHorizontal: 14,
    fontSize: 16,
  },

  suffixContainer: {
    paddingHorizontal: 14,
    // height: "100%",
    padding: 10,
    justifyContent: "center",
    borderLeftWidth: StyleSheet.hairlineWidth,
  },
});
