import { ThemedText } from "@/components/ThemedText";
import { Raduis } from "@/constants/Radius";
import { useThemeColors } from "@/hooks/useThemeColors";
import DateTimePicker from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Platform, Pressable, View } from "react-native";

type DateInputProps = {
  value: Date;
  onChange: (date: Date) => void;
};

export default function DateInput({ value, onChange }: DateInputProps) {
  const [show, setShow] = useState(false);
  const colors = useThemeColors();

  const handleChange = (_: any, selectedDate?: Date) => {
    setShow(Platform.OS === "ios");

    if (selectedDate) {
      onChange(selectedDate);
    }
  };

  return (
    <View>
      <Pressable
        onPress={() => setShow(true)}
        style={{
          backgroundColor: colors.primary,
          paddingVertical: 12,
          paddingHorizontal: 10,
          borderRadius: Raduis.md,
          alignItems: "center",
        }}
      >
        <ThemedText variant="body" color="background">
          {value.toLocaleDateString()}
        </ThemedText>
      </Pressable>

      {show && (
        <DateTimePicker
          value={value}
          mode="date"
          display="default"
          onValueChange={handleChange}
        />
      )}
    </View>
  );
}
