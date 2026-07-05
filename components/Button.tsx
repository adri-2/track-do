import { Raduis } from "@/constants/Radius";
import { useThemeColors } from "@/hooks/useThemeColors";
import { Pressable, PressableProps, StyleSheet, ViewStyle } from "react-native";
import { ThemedText } from "./ThemedText";

type Props = PressableProps & {
  title: string;
  containerStyle?: ViewStyle;
};

export function Button({ title, onPress, containerStyle, ...rest }: Props) {
  const colors = useThemeColors();

  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: colors.primary },
        containerStyle,
      ]}
      {...rest}
    >
      <ThemedText variant="body" color="surface">
        {title}
      </ThemedText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: Raduis.sm,
    paddingHorizontal: 20,
  },
});
