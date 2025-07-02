import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function SnapCartScreen({ navigation }) {
  const [imageUri, setImageUri] = useState(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: false,
      quality: 1,
    });

    if (!result.canceled && result.assets.length > 0) {
      setImageUri(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>SnapCart - Upload Grocery Photo</Text>

      <Button title="Pick Image from Gallery" onPress={pickImage} />
      {imageUri && <Image source={{ uri: imageUri }} style={styles.preview} />}

      <View style={styles.spacer}>
        <Button
          title="Use Manual Entry Instead"
          onPress={() => navigation.navigate("AddItemManual")}
        />
      </View>

      <View style={styles.spacer}>
        <Button
          title="View Grocery List"
          onPress={() => navigation.navigate("GroceryList")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  preview: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    marginVertical: 12,
    borderRadius: 8,
  },
  spacer: {
    marginVertical: 10,
  },
});
