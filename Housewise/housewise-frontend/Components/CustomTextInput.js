import React from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

const CustomTextInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureText = false,
  keyboardType = "default",
  style,
}) => {
  return (
    <View>
      {label && <Text>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureText}
        keyboardType={keyboardType}
        autoCapitalize="none"
        style={style}
      />
    </View>
  );
};

export default CustomTextInput;
