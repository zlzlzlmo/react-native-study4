import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/styles";

interface ButtonProps {
  onPress: () => void;
  children: string;
  mode?: "flat";
  style?: any;
}

const Button = ({ onPress, children, mode, style }: ButtonProps) => {
  return (
    <View style={style}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={[styles.button, mode === "flat" && styles.flat]}>
          <Text style={[styles.buttonText, mode === "flat" && styles.flatText]}>
            {children}
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderRadius: 4,
    padding: 8,
    backgroundColor: GlobalStyles.colors.subColor,
  },
  flat: {
    backgroundColor: "transparent",
  },
  buttonText: {
    color: GlobalStyles.colors.whiteColor,
    textAlign: "center",
  },
  flatText: {
    color: GlobalStyles.colors.whiteColor,
  },
  pressed: {
    opacity: 0.7,
    backgroundColor: GlobalStyles.colors.subColor3,
    borderRadius: 4,
  },
});
