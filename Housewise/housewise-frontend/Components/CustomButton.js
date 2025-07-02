import React from "react";
import { Pressable, Text, StyleSheet, View, style } from "react-native";

const CustomButton = ({ label, onPressed, style, btnTextStyle, btnStyle }) => {
  return (
    <View style={[styles.wrapper, style]}>
      <Pressable onPress={onPressed} style={btnStyle}>
        <Text style={btnTextStyle}>{label}</Text>
      </Pressable>
    </View>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 10,
    alignItems: "center",
  },
});
