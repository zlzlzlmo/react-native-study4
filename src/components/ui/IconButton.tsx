import { StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

interface IconButtonProps {
  onPress: () => void;
  icon: "plus";
  size: number;
  color: string;
}

const IconButton = ({ icon, color, size, onPress }: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <AntDesign name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 24,
    padding: 6,
    marginHorizontal: 8,
    marginVertical: 2,
  },
  pressed: {
    opacity: 0.75,
  },
});
