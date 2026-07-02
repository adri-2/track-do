import { Colors } from "@/constants/Colors";
import { useThemeColors } from "@/hooks/useThemeColors";
import { StyleSheet, Text, TextProps } from "react-native";
const styles = StyleSheet.create({
  display: {
    fontSize: 32,
    lineHeight: 40,
    fontWeight: "bold",
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "700",
  },
  heading: {
    fontSize: 20,
    lineHeight: 28,
    fontWeight: "600",
  },
  body: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "500",
  },
  label: {
    fontSize: 14,
    lineHeight: 20,
    fontWeight: "500",
  },
  caption: {
    fontSize: 12,
    lineHeight: 16,
    fontWeight: "400",
  },
});

type Props = TextProps & {
  variant?: keyof typeof styles;
  color?: keyof (typeof Colors)["light"];
};

export function ThemedText({ variant, style, color, ...rest }: Props) {
  const colors = useThemeColors();
  return (
    <Text
      style={[
        styles[variant ?? "body"],
        { color: colors[color ?? "text"] },
        style,
      ]}
      {...rest}
    />
  );
}
