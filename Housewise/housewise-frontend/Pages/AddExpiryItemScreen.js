import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

export default function AddExpiryItemScreen() {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [expiryDate, setExpiryDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) setExpiryDate(selectedDate);
  };

  const handleAdd = () => {
    if (!name.trim()) {
      Alert.alert("Item name is required");
      return;
    }

    const newItem = {
      id: Date.now().toString(),
      name: name.trim(),
      category: category.trim() || "Uncategorized",
      expiryDate: expiryDate.toISOString().split("T")[0], // YYYY-MM-DD
    };

    // For now: simply go back (later save via context or backend)
    Alert.alert("Item added!", `${newItem.name} → ${newItem.expiryDate}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Expiry Item</Text>

      <TextInput
        style={styles.input}
        placeholder="Item name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Category (optional)"
        value={category}
        onChangeText={setCategory}
      />

      <Button
        title={`Pick Expiry Date: ${expiryDate.toDateString()}`}
        onPress={() => setShowPicker(true)}
      />

      {showPicker && (
        <DateTimePicker
          value={expiryDate}
          mode="date"
          display={Platform.OS === "ios" ? "inline" : "default"}
          onChange={handleDateChange}
        />
      )}

      <View style={{ marginTop: 16 }}>
        <Button title="Add Item" onPress={handleAdd} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 20, fontWeight: "bold", marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 12,
    marginBottom: 12,
    borderRadius: 8,
  },
});
