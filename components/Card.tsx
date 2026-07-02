import { Raduis } from "@/constants/Radius";
import { Shadows } from "@/constants/Shadows";
import { useThemeColors } from "@/hooks/useThemeColors";
import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps;

export function Card({ style, ...rest }: Props) {
  const colors = useThemeColors();
  const raduis = Raduis;
  return (
    <View
      style={[
        styles,
        { backgroundColor: colors.background, borderRadius: raduis.none },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = {
  //   borderRadius: 8,
  ...Shadows.sm,
} satisfies ViewStyle;
